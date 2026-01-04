import express from 'express';
import cors from 'cors';
import { createServer as createViteServer } from 'vite';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// API Route: Send Early Access Email
app.post('/api/send-early-access-email', async (req, res) => {
  console.log('📧 Received early access request');
  
  try {
    const { firstName, lastName, email, organization, role, interest, message, source } = req.body;

    console.log('Request body:', { firstName, lastName, email, organization, role, interest, source });

    // Validate required fields
    if (!firstName || !lastName || !email) {
      console.log('Missing required fields');
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const USEPLUNK_API_KEY = process.env.USEPLUNK_API_KEY;

    if (!USEPLUNK_API_KEY) {
      console.error('Useplunk API key not configured');
      return res.status(500).json({ error: 'Email service not configured' });
    }

    console.log('API key found, adding contact...');

    // Add contact to Useplunk
    try {
      const contactResponse = await fetch('https://api.useplunk.com/v1/contacts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${USEPLUNK_API_KEY}`
        },
        body: JSON.stringify({
          email,
          subscribed: true,
          data: {
            firstName,
            lastName,
            organization: organization || '',
            role: role || '',
            interest: interest || '',
            source: source || ''
          }
        })
      });

      const contactData = await contactResponse.text();
      
      if (!contactResponse.ok) {
        console.log('Contact creation response:', contactData);
        // Don't fail here - contact might already exist
      } else {
        console.log('Contact added successfully');
      }
    } catch (contactError) {
      console.error('Contact creation error (continuing anyway):', contactError.message);
    }

    console.log('Sending notification email...');

    const adminHtml = buildAdminEmail({
      firstName,
      lastName,
      email,
      organization,
      role,
      interest,
      source,
      message
    });

    // Send email notification to admin
    const emailResponse = await fetch('https://api.useplunk.com/v1/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${USEPLUNK_API_KEY}`
      },
      body: JSON.stringify({
        to: process.env.ADMIN_EMAIL,
        subject: `New early access request: ${firstName} ${lastName}`,
        body: adminHtml,
        name: 'Skyta.space',
        from: process.env.SENDER_EMAIL,
      })
    });

    const emailData = await emailResponse.text();
    console.log('Email response status:', emailResponse.status);
    console.log('Email response:', emailData);

    if (!emailResponse.ok) {
      console.error('Email sending failed');
      return res.status(500).json({ error: 'Failed to send notification email', details: emailData });
    }

    console.log('Notification email sent');

    // Send confirmation email to user
    try {
      console.log('Sending confirmation email to user...');

      const userHtml = buildUserEmail({
        firstName,
        source
      });

      const confirmResponse = await fetch('https://api.useplunk.com/v1/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${USEPLUNK_API_KEY}`
        },
        body: JSON.stringify({
          to: email,
          subject: 'Thank you for requesting early access to Skyta.space',
          body: userHtml,
          name: 'Skyta.space',
          from: process.env.SENDER_EMAIL
        })
      });

      if (confirmResponse.ok) {
        console.log('Confirmation email sent');
      } else {
        console.log('Confirmation email failed (non-critical)');
      }
    } catch (confirmError) {
      console.log('Confirmation email error (non-critical):', confirmError.message);
    }

    console.log('Request completed successfully');

    return res.status(200).json({ 
      success: true, 
      message: 'Early access request submitted successfully' 
    });

  } catch (error) {
    console.error('FATAL ERROR:', error);
    console.error('Error stack:', error.stack);
    return res.status(500).json({ 
      error: 'Failed to process request',
      details: error.message 
    });
  }
});

// API Route: Send Quiz Results Email
app.post('/api/send-quiz-results-email', async (req, res) => {
  console.log('📊 Received quiz results email request');
  
  try {
    const { firstName, email, track, score, description } = req.body;

    console.log('Request body:', { firstName, email, track, score });

    // Validate required fields
    if (!firstName || !email || !track || score === undefined) {
      console.log('Missing required fields');
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const USEPLUNK_API_KEY = process.env.USEPLUNK_API_KEY;

    if (!USEPLUNK_API_KEY) {
      console.error('Useplunk API key not configured');
      return res.status(500).json({ error: 'Email service not configured' });
    }

    console.log('API key found');

    // Build email HTML
    const userHtml = buildUserQuizResultEmail({
      firstName,
      track,
      score,
      description
    });

    const adminHtml = buildAdminQuizResultEmail({
      firstName,
      email,
      track,
      score,
      description
    });

    console.log('Sending quiz results email to user...');

    // Send email to user with their results
    const userEmailResponse = await fetch('https://api.useplunk.com/v1/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${USEPLUNK_API_KEY}`
      },
      body: JSON.stringify({
        to: email,
        subject: `Your Skyta.space Assessment: ${track}`,
        body: userHtml,
        name: 'Skyta.space',
        from: process.env.SENDER_EMAIL,
      })
    });

    const userEmailData = await userEmailResponse.text();
    console.log('User email response status:', userEmailResponse.status);

    if (!userEmailResponse.ok) {
      console.error('User email sending failed');
      return res.status(500).json({ error: 'Failed to send results email', details: userEmailData });
    }

    console.log('User quiz results email sent');

    // Send notification to admin
    try {
      console.log('Sending quiz results notification to admin...');
      const adminEmailResponse = await fetch('https://api.useplunk.com/v1/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${USEPLUNK_API_KEY}`
        },
        body: JSON.stringify({
          to: process.env.ADMIN_EMAIL,
          subject: `New quiz result: ${firstName} (${track} - ${score}%)`,
          body: adminHtml,
          name: 'Skyta.space',
          from: process.env.SENDER_EMAIL
        })
      });

      if (adminEmailResponse.ok) {
        console.log('Admin notification sent');
      } else {
        console.log('Admin notification failed (non-critical)');
      }
    } catch (adminError) {
      console.log('Admin notification error (non-critical):', adminError.message);
    }

    console.log('Quiz results email request completed successfully');

    return res.status(200).json({ 
      success: true, 
      message: 'Quiz results email sent successfully' 
    });

  } catch (error) {
    console.error('FATAL ERROR:', error);
    console.error('Error stack:', error.stack);
    return res.status(500).json({ 
      error: 'Failed to process request',
      details: error.message 
    });
  }
});

// Create Vite server
const vite = await createViteServer({
  server: { middlewareMode: true },
  appType: 'spa'
});

app.use(vite.middlewares);

const PORT = process.env.PORT || 5173;
app.listen(PORT, () => {
  console.log(`Dev server running on http://localhost:${PORT}`);
  console.log(`API endpoint: http://localhost:${PORT}/api/send-early-access-email`);
});

function baseEmailShell(content) {
  return `
    <div style="font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; background:#05070f; padding:24px; color:#e5e7eb;">
      <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:640px; margin:0 auto; background:#0c1220; border:1px solid rgba(255,255,255,0.06); border-radius:16px; overflow:hidden;">
        <tr>
          <td style="padding:20px 24px; text-align:center; background:linear-gradient(135deg, rgba(30,218,252,0.12), rgba(24,174,202,0.08));">
            <div style="font-size:20px; font-weight:700; color:#e5f2ff;">Skyta.space</div>
            <div style="font-size:13px; color:#c7d5f0; margin-top:4px;">Space, data, and mission-grade learning</div>
          </td>
        </tr>
        <tr>
          <td style="padding:24px;">
            ${content}
          </td>
        </tr>
        <tr>
          <td style="padding:18px 24px; background:#0b101d; color:#94a3b8; font-size:12px; text-align:center;">
            You are receiving this because someone submitted an early access request on Skyta.space.
          </td>
        </tr>
      </table>
    </div>
  `;
}

function buildAdminEmail({ firstName, lastName, email, organization, role, interest, source, message }) {
  const safe = (val, fallback = 'Not provided') => (val ? String(val) : fallback);

  const content = `
    <h2 style="margin:0 0 12px; color:#e5f2ff; font-size:20px;">New early access request</h2>
    <p style="margin:0 0 16px; color:#cbd5e1;">A new lead just came in. Details below.</p>
    <table role="presentation" cellspacing="0" cellpadding="0" style="width:100%; border-collapse:collapse; color:#e2e8f0;">
      ${infoRow('Name', `${safe(firstName, '')} ${safe(lastName, '')}`.trim())}
      ${infoRow('Email', safe(email, ''))}
      ${infoRow('Organization', safe(organization))}
      ${infoRow('Role', safe(role))}
      ${infoRow('Interest', safe(interest))}
      ${infoRow('Source', safe(source))}
      ${infoRow('Message', safe(message, 'No message provided'))}
    </table>
    <div style="margin-top:16px; display:flex; gap:8px;">
      <a href="mailto:${safe(email,'')}/?subject=Skyta%20Early%20Access" style="text-decoration:none; background:#1edafc; color:#0b1220; padding:10px 10px; border-radius:10px; font-weight:700; font-size:10px;">Reply</a>
      <a href="mailto:${process.env.ADMIN_EMAIL || 'admin@skyta.space'}" style="text-decoration:none; background:transparent; color:#1edafc; border:1px solid #1edafc; padding:10px 10px; border-radius:10px; font-weight:600; font-size:10px;">Forward</a>
    </div>
  `;

  return baseEmailShell(content);
}

function buildUserEmail({ firstName, source }) {
  const greeting = firstName ? `Hi ${firstName},` : 'Hi there,';
  const lead = source ? `You found us via ${source}.` : 'You are now in the priority queue.';

  const content = `
    <p style="margin:0 0 12px; color:#e2e8f0; font-size:20px; font-weight:700;">We received your request</p>
    <p style="margin:0 0 12px; color:#cbd5e1;">${greeting}</p>
    <p style="margin:0 0 12px; color:#cbd5e1;">Thanks for requesting early access to Skyta.space. ${lead}</p>
    <p style="margin:0 0 12px; color:#cbd5e1;">Our team will review and get back to you within 2-3 business days with next steps and a tailored starter track.</p>
    <ul style="margin:0 0 16px 18px; padding:0; color:#cbd5e1;">
      <li>Expect a brief intro call invite if you are a fit.</li>
      <li>We will share a starter checklist and recommended modules.</li>
      <li>You can reply to this email anytime with questions.</li>
    </ul>
    <div style="margin:18px 0 8px;">
      <a href="https://skyta.space/pricing" style="text-decoration:none; background:#1edafc; color:#0b1220; padding:12px 16px; border-radius:12px; font-weight:700; font-size:10px;">Visit our website</a>
    </div>
    <p style="margin:12px 0 0; color:#94a3b8; font-size:13px;">If you did not request this, you can ignore this email.</p>
  `;

  return baseEmailShell(content);
}

function infoRow(label, value) {
  return `
    <tr>
      <td style="padding:6px 0; font-size:13px; color:#94a3b8; width:160px;">${label}</td>
      <td style="padding:6px 0; font-size:10px; color:#e2e8f0;">${value}</td>
    </tr>
  `;
}

// Quiz Results Email Builders
function buildUserQuizResultEmail({ firstName, track, score, description }) {
  const greeting = firstName ? `Hi ${firstName},` : 'Hi there,';
  const trackEmoji = getTrackEmoji(track);

  const content = `
    <h2 style="margin:0 0 16px; color:#e5f2ff; font-size:24px; font-weight:700;">${trackEmoji} Your Results Are Ready</h2>
    <p style="margin:0 0 16px; color:#cbd5e1;">${greeting}</p>
    
    <div style="background:#031619; border:1px solid rgba(30,218,252,0.3); border-radius:12px; padding:20px; margin:16px 0; text-align:center;">
      <div style="font-size:10px; color:#94a3b8; margin-bottom:8px;">Your Learning Track</div>
      <h3 style="margin:0 0 8px; color:#1edafc; font-size:32px; font-weight:700;">${track}</h3>
      <div style="font-size:28px; font-weight:700; color:#18AECA; margin:8px 0;">${score}%</div>
      <p style="margin:12px 0 0; color:#cbd5e1; font-size:10px; line-height:1.5;">${description}</p>
    </div>

    <div style="background:#031619; border:1px solid rgba(30,218,252,0.2); border-radius:12px; padding:16px; margin:16px 0;">
      <h4 style="margin:0 0 12px; color:#e5f2ff; font-size:10px; font-weight:700;">What comes next</h4>
      <ul style="margin:0; padding:0 0 0 18px; color:#cbd5e1; font-size:10px; line-height:1.8;">
        <li>Check out our learning paths tailored to your ${track} track.</li>
        <li>Book an intro call with our team to discuss your goals.</li>
        <li>Access exclusive starter modules and resources.</li>
        <li>Join our community of space learners and professionals.</li>
      </ul>
    </div>

    <div style="text-align:center; margin:20px 0;">
      <a href="https://skyta.space/pricing" style="text-decoration:none; background:linear-gradient(135deg, #1EDAFC, #18AECA); color:#0b1220; padding:12px 24px; border-radius:12px; font-weight:700; font-size:10px; display:inline-block;">Explore Your Path</a>
    </div>

    <p style="margin:12px 0 0; color:#94a3b8; font-size:13px; text-align:center;">Questions? Reply to this email and we'll help you get started.</p>
  `;

  return baseEmailShell(content);
}

function buildAdminQuizResultEmail({ firstName, email, track, score, description }) {
  const content = `
    <h2 style="margin:0 0 12px; color:#e5f2ff; font-size:20px;">New quiz completion</h2>
    <p style="margin:0 0 16px; color:#cbd5e1;">Someone just completed the Free Skill Assessment.</p>
    
    <table role="presentation" cellspacing="0" cellpadding="0" style="width:100%; border-collapse:collapse; color:#e2e8f0; margin-bottom:16px;">
      ${infoRow('Name', firstName)}
      ${infoRow('Email', email)}
      ${infoRow('Track', track)}
      ${infoRow('Score', `${score}%`)}
      ${infoRow('Description', description)}
    </table>

    <div style="background:#031619; border:1px solid rgba(30,218,252,0.2); border-radius:12px; padding:16px; margin:16px 0;">
      <p style="margin:0; color:#cbd5e1; font-size:13px;">
        <strong style="color:#1edafc;">Next step:</strong> Contact ${firstName} at <strong>${email}</strong> to schedule an intro call and share the recommended modules for their ${track} track.
      </p>
    </div>

    <div style="margin-top:16px; display:flex; gap:8px;">
      <a href="mailto:${email}/?subject=Let%27s%20Connect%20%7C%20Skyta.space" style="text-decoration:none; background:#1edafc; color:#0b1220; padding:10px 10px; border-radius:10px; font-weight:700; font-size:10px;">Contact Lead</a>
    </div>
  `;

  return baseEmailShell(content);
}

function getTrackEmoji(track) {
  const emojiMap = {
    'Explorer': '🌍',
    'Builder': '🔧',
    'Analyst': '📊',
    'Operator': '🛰️',
    'Leader': '👑'
  };
  return emojiMap[track] || '🚀';
}