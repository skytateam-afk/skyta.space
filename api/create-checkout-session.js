import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  // Handle preflight request
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  // Only allow POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { priceId, mode, successUrl, cancelUrl } = req.body;

    // Log the request for debugging
    console.log('Checkout request:', { priceId, mode });

    // Validate input
    if (!priceId || !mode || !successUrl || !cancelUrl) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Whitelist of valid price IDs (optional but recommended for security)
    // Uncomment and update with your actual price IDs once created
    /*
    const validPriceIds = [
      'price_xxxxxxxxxxxxx',  // Explorer monthly
      'price_xxxxxxxxxxxxx',  // Explorer yearly
      'price_xxxxxxxxxxxxx',  // Insider monthly
      'price_xxxxxxxxxxxxx',  // Insider yearly
      'price_xxxxxxxxxxxxx',  // Founder lifetime
    ];

    if (!validPriceIds.includes(priceId)) {
      return res.status(400).json({ error: 'Invalid price ID' });
    }
    */

    // Validate mode
    if (!['subscription', 'payment'].includes(mode)) {
      return res.status(400).json({ error: 'Invalid mode' });
    }

    // Create Stripe Checkout Session
    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      mode: mode,
      success_url: successUrl,
      cancel_url: cancelUrl,
      // Optional: Add metadata for tracking
      metadata: {
        tier: priceId.includes('explorer') ? 'explorer' : 
              priceId.includes('insider') ? 'insider' : 'founder',
      },
    });

    res.status(200).json({ url: session.url });
  } catch (error) {
    console.error('Error creating checkout session:', error);
    res.status(500).json({ 
      error: 'Failed to create checkout session',
      message: error.message 
    });
  }
}
