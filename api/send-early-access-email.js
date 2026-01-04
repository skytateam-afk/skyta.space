export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { firstName, lastName, email, organization, role, interest, message, source } = req.body;

    // Validate required fields
    if (!firstName || !lastName || !email) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const USEPLUNK_API_KEY = process.env.USEPLUNK_API_KEY;

    if (!USEPLUNK_API_KEY) {
      console.error('Useplunk API key not configured');
      return res.status(500).json({ error: 'Email service not configured' });
    }

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

      if (!contactResponse.ok) {
        const errorData = await contactResponse.text();
        console.error('Useplunk contact creation failed:', errorData);
        // Continue anyway as contact might already exist
      }
    } catch (contactError) {
      console.error('Contact creation error (continuing anyway):', contactError.message);
    }

    const adminHtml = buildAdminEmail({ firstName, lastName, email, organization, role, interest, source, message });

    // Send email notification to admin
    const emailResponse = await fetch('https://api.useplunk.com/v1/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${USEPLUNK_API_KEY}`
      },
      body: JSON.stringify({
        to: process.env.ADMIN_EMAIL || 'admin@skyta.space',
        subject: `New Early Access Request: ${firstName} ${lastName}`,
        body: adminHtml,
        name: 'Skyta.space',
        from: process.env.SENDER_EMAIL
      })
    });

    if (!emailResponse.ok) {
      const errorData = await emailResponse.text();
      console.error('Useplunk email sending failed:', errorData);
      return res.status(500).json({ error: 'Failed to send notification email' });
    }

    // Send confirmation email to user
    try {
      const userHtml = buildUserEmail({ firstName, source });

      await fetch('https://api.useplunk.com/v1/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${USEPLUNK_API_KEY}`
        },
        body: JSON.stringify({
          to: email,
          subject: 'We received your early access request',
          body: userHtml,
          name: 'Skyta.space',
          from: process.env.SENDER_EMAIL
        })
      });
    } catch (confirmError) {
      console.log('Confirmation email error (non-critical):', confirmError.message);
    }

    return res.status(200).json({ 
      success: true, 
      message: 'Early access request submitted successfully' 
    });

  } catch (error) {
    console.error('Error processing early access request:', error);
    return res.status(500).json({ 
      error: 'Failed to process request',
      details: error.message 
    });
  }
}

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
      <a href="https://skyta.space/pricing" style="text-decoration:none; background:#1edafc; color:#0b1220; padding:12px 16px; border-radius:12px; font-weight:700; font-size:10px;">Visit our Website</a>
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