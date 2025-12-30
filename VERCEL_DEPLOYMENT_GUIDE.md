# Vercel Deployment Guide for Stripe Integration

## Overview

This guide will help you deploy your Skyta.space application to Vercel with the Stripe integration using serverless functions.

## Prerequisites

- A Vercel account (sign up at https://vercel.com)
- A Stripe account with products created
- Git repository connected to Vercel

## Step 1: Install Vercel CLI (Optional)

```bash
npm install -g vercel
```

## Step 2: Set Up Environment Variables in Vercel

### Via Vercel Dashboard:

1. Go to your project on Vercel: https://vercel.com/dashboard
2. Click on your project
3. Go to **Settings** → **Environment Variables**
4. Add the following variables:

#### Frontend Variable (Available to Browser):
- **Name:** `VITE_STRIPE_PUBLIC_KEY`
- **Value:** Your Stripe publishable key (starts with `pk_live_` or `pk_test_`)
- **Environments:** Production, Preview, Development

#### Backend Variable (Server-side only):
- **Name:** `STRIPE_SECRET_KEY`
- **Value:** Your Stripe secret key (starts with `sk_live_` or `sk_test_`)
- **Environments:** Production, Preview, Development
- **⚠️ CRITICAL:** Never expose this key in frontend code!

### Via Vercel CLI:

```bash
# Add public key (frontend)
vercel env add VITE_STRIPE_PUBLIC_KEY

# Add secret key (backend)
vercel env add STRIPE_SECRET_KEY
```

## Step 3: Update Price IDs

Before deploying, update the price IDs in `src/components/sections/PricingSection.vue`:

```javascript
const priceIds = {
  explorer: {
    monthly: 'price_1ABC123...',  // Your actual price ID
    yearly: 'price_1DEF456...'
  },
  insider: {
    monthly: 'price_1GHI789...',
    yearly: 'price_1JKL012...'
  },
  founder: {
    lifetime: 'price_1MNO345...'
  }
}
```

## Step 4: Deploy to Vercel

### Option A: Deploy via Git (Recommended)

1. Push your code to GitHub/GitLab/Bitbucket:
   ```bash
   git add .
   git commit -m "Add Stripe integration with Vercel serverless functions"
   git push origin main
   ```

2. Vercel will automatically deploy your changes

### Option B: Deploy via CLI

```bash
# Deploy to production
vercel --prod

# Or deploy to preview
vercel
```

## Step 5: Verify Deployment

After deployment:

1. Visit your deployed site
2. Navigate to the pricing section
3. Click on a pricing tier
4. You should be redirected to Stripe Checkout

## Project Structure

```
your-project/
├── api/
│   └── create-checkout-session.js  # Vercel serverless function
├── src/
│   └── components/
│       └── sections/
│           └── PricingSection.vue   # Frontend component
├── vercel.json                      # Vercel configuration
└── .env                             # Local environment variables (not deployed)
```

## How It Works

1. **Frontend** (`PricingSection.vue`):
   - User clicks a pricing tier
   - Makes POST request to `/api/create-checkout-session`
   - Receives session ID
   - Redirects to Stripe Checkout

2. **Backend** (`api/create-checkout-session.js`):
   - Vercel serverless function
   - Creates Stripe Checkout Session
   - Returns session ID to frontend
   - Runs securely with your secret key

## Testing Locally

To test the Vercel functions locally:

```bash
# Install Vercel CLI
npm install -g vercel

# Run development server with Vercel functions
vercel dev
```

This will:
- Start your Vite dev server
- Run Vercel serverless functions locally
- Load environment variables from Vercel

## Environment Variables Summary

| Variable | Type | Where Used | Example |
|----------|------|------------|---------|
| `VITE_STRIPE_PUBLIC_KEY` | Public | Frontend | `pk_live_51...` |
| `STRIPE_SECRET_KEY` | Secret | Backend API | `sk_live_51...` |

## Security Best Practices

✅ **DO:**
- Use environment variables for all keys
- Keep secret key server-side only
- Use HTTPS in production (Vercel provides this automatically)
- Validate price IDs on the backend

❌ **DON'T:**
- Commit `.env` file to Git
- Expose secret key in frontend code
- Hardcode API keys in source code

## Troubleshooting

### Issue: "STRIPE_SECRET_KEY is not defined"

**Solution:** Make sure you've added the environment variable in Vercel dashboard and redeployed.

### Issue: "Failed to create checkout session"

**Solutions:**
1. Check that your Stripe secret key is correct
2. Verify price IDs are valid and in the correct mode (test/live)
3. Check Vercel function logs: `vercel logs`

### Issue: CORS errors

**Solution:** The API endpoint includes CORS headers. If you still have issues, check that you're making requests to the same domain.

### Issue: Function timeout

**Solution:** The `vercel.json` sets a 10-second timeout. If needed, increase it:
```json
{
  "functions": {
    "api/**/*.js": {
      "maxDuration": 30
    }
  }
}
```

## Monitoring

### View Function Logs

```bash
# View real-time logs
vercel logs --follow

# View logs for specific deployment
vercel logs [deployment-url]
```

### Vercel Dashboard

1. Go to your project on Vercel
2. Click **Functions** tab
3. View invocations, errors, and performance

## Webhooks (Optional but Recommended)

To handle Stripe events (subscription created, payment succeeded, etc.):

1. Create `api/webhook.js`:
```javascript
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).end();
  }

  const sig = req.headers['stripe-signature'];
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

  try {
    const event = stripe.webhooks.constructEvent(
      req.body,
      sig,
      webhookSecret
    );

    // Handle the event
    switch (event.type) {
      case 'checkout.session.completed':
        // Grant access to user
        break;
      case 'customer.subscription.created':
        // Handle new subscription
        break;
    }

    res.json({ received: true });
  } catch (err) {
    res.status(400).send(`Webhook Error: ${err.message}`);
  }
}
```

2. Add webhook endpoint in Stripe Dashboard:
   - URL: `https://your-domain.vercel.app/api/webhook`
   - Events: `checkout.session.completed`, `customer.subscription.created`, etc.

3. Add `STRIPE_WEBHOOK_SECRET` to Vercel environment variables

## Production Checklist

Before going live:

- [ ] Switch to live Stripe keys (both public and secret)
- [ ] Update price IDs to live mode prices
- [ ] Test checkout flow end-to-end
- [ ] Set up webhook endpoint
- [ ] Configure custom domain (optional)
- [ ] Enable Vercel Analytics (optional)
- [ ] Set up monitoring/alerts

## Support

- Vercel Documentation: https://vercel.com/docs
- Stripe Documentation: https://stripe.com/docs
- Vercel Serverless Functions: https://vercel.com/docs/functions

## Next Steps

1. Deploy to Vercel
2. Test the integration
3. Set up webhooks for subscription management
4. Monitor function performance
5. Scale as needed (Vercel handles this automatically)
