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
      console.log('❌ Missing required fields');
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const USEPLUNK_API_KEY = process.env.USEPLUNK_API_KEY;

    if (!USEPLUNK_API_KEY) {
      console.error('❌ Useplunk API key not configured');
      return res.status(500).json({ error: 'Email service not configured' });
    }

    console.log('✓ API key found, adding contact...');

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
        console.log('⚠️ Contact creation response:', contactData);
        // Don't fail here - contact might already exist
      } else {
        console.log('✓ Contact added successfully');
      }
    } catch (contactError) {
      console.error('⚠️ Contact creation error (continuing anyway):', contactError.message);
    }

    console.log('✓ Sending notification email...');

    // Send email notification to admin
    const emailResponse = await fetch('https://api.useplunk.com/v1/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${USEPLUNK_API_KEY}`
      },
      body: JSON.stringify({
        to: process.env.ADMIN_EMAIL,
        subject: `New Early Access Request from ${firstName} ${lastName}`,
        body: `
          <h2>New Early Access Request</h2>
          <p><strong>Name:</strong> ${firstName} ${lastName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Organization:</strong> ${organization || 'Not provided'}</p>
          <p><strong>Role:</strong> ${role || 'Not provided'}</p>
          <p><strong>Primary Interest:</strong> ${interest || 'Not provided'}</p>
          <p><strong>Source:</strong> ${source || 'Not provided'}</p>
          <p><strong>Message:</strong></p>
          <p>${message || 'No message provided'}</p>
        `,
        name: 'Skyta.space',
        from: process.env.SENDER_EMAIL,
      })
    });

    const emailData = await emailResponse.text();
    console.log('Email response status:', emailResponse.status);
    console.log('Email response:', emailData);

    if (!emailResponse.ok) {
      console.error('❌ Email sending failed');
      return res.status(500).json({ error: 'Failed to send notification email', details: emailData });
    }

    console.log('✓ Notification email sent');

    // Send confirmation email to user
    try {
      console.log('✓ Sending confirmation email to user...');
      const confirmResponse = await fetch('https://api.useplunk.com/v1/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${USEPLUNK_API_KEY}`
        },
        body: JSON.stringify({
          to: email,
          subject: 'Thank you for requesting early access to Skyta.space',
          body: `
            <h2>Thank you for your interest in Skyta.space!</h2>
            <p>Hi ${firstName},</p>
            <p>We've received your request for early access and are excited to have you join us.</p>
            <p>Our team will review your application and get back to you within 2-3 business days.</p>
            <p>In the meantime, feel free to explore our website and learn more about what Skyta.space can do for you.</p>
            <br>
            <p>Best regards,<br>The Skyta.space Team</p>
          `,
          name: 'Skyta.space',
          from: process.env.SENDER_EMAIL
        })
      });

      if (confirmResponse.ok) {
        console.log('✓ Confirmation email sent');
      } else {
        console.log('⚠️ Confirmation email failed (non-critical)');
      }
    } catch (confirmError) {
      console.log('⚠️ Confirmation email error (non-critical):', confirmError.message);
    }

    console.log('✅ Request completed successfully');

    return res.status(200).json({ 
      success: true, 
      message: 'Early access request submitted successfully' 
    });

  } catch (error) {
    console.error('❌ FATAL ERROR:', error);
    console.error('Error stack:', error.stack);
    return res.status(500).json({ 
      error: 'Failed to process request',
      details: error.message 
    });
  }
});

// Add any other API routes here following the same pattern
// Example:
// app.post('/api/another-endpoint', async (req, res) => { ... });

// Create Vite server
const vite = await createViteServer({
  server: { middlewareMode: true },
  appType: 'spa'
});

app.use(vite.middlewares);

const PORT = process.env.PORT || 5173;
app.listen(PORT, () => {
  console.log(`🚀 Dev server running on http://localhost:${PORT}`);
  console.log(`📧 API endpoint: http://localhost:${PORT}/api/send-early-access-email`);
});