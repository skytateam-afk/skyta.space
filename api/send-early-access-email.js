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

    // Send email notification to admin
    const emailResponse = await fetch('https://api.useplunk.com/v1/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${USEPLUNK_API_KEY}`
      },
      body: JSON.stringify({
        to: process.env.ADMIN_EMAIL || 'admin@skyta.space',
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
      await fetch('https://api.useplunk.com/v1/send', {
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