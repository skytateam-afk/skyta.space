# Stripe Price Update Guide

## Price Changes Summary

I've updated the Stripe setup script to match your frontend pricing:

### Updated Prices ✅

| Tier | Frontend Price | Old Stripe Price | New Stripe Price |
|------|---------------|------------------|------------------|
| **Early Bird Monthly** | $19.99/mo | $12.99/mo | ✅ $19.99/mo |
| **Early Bird Yearly** | $154.88/yr | $155.88/yr | ✅ $154.88/yr |
| **Premium Monthly** | $29.99/mo | $18.99/mo | ✅ $29.99/mo |
| **Premium Yearly** | $227.99/yr | $227.88/yr | ✅ $227.99/yr |
| **Cosmic Founder** | $154.99 lifetime | $155.00 lifetime | ✅ $154.99 lifetime |

## Next Steps

### 1. Ensure Your .env File is Configured ✅

Make sure you have a `.env` file in the root directory with your Stripe keys:

```bash
VITE_STRIPE_PUBLIC_KEY=pk_test_your_actual_key_here
STRIPE_SECRET_KEY=sk_test_your_actual_secret_key_here
```

### 2. Run the Setup Script ✅ COMPLETED

This will create NEW products and prices in Stripe with the correct pricing:

```bash
npm run setup:stripe
```

This script will:
- ✅ Create new Stripe products with correct pricing
- ✅ Generate new price IDs
- ✅ Automatically update both `stripe-price-ids.json` and `public/stripe-price-ids.json`

**Status: ✅ Completed - New price IDs generated**

### 3. Test Locally with Vercel CLI

⚠️ **Important**: The `/api` folder contains Vercel serverless functions that won't work with just `npm run dev`. 

To test the Stripe checkout locally:

**Option 1: Install and use Vercel CLI (Recommended)**
```bash
# Install Vercel CLI globally (if not installed)
npm install -g vercel

# Run with Vercel dev server (this enables the /api endpoints)
npm run dev:vercel
```

**Option 2: Test directly on Vercel**
Deploy to Vercel and test on your live site (the API endpoints work automatically on Vercel).

### 4. Deploy to Production

Once verified:
1. Commit the updated files:
   - `stripe-price-ids.json`
   - `public/stripe-price-ids.json`
   - `scripts/setup-stripe-products.js`
   - `package.json`
2. Push to your repository
3. Vercel will automatically deploy with the updated configuration

## Important Notes

⚠️ **Old Price IDs**: The old price IDs in your current `stripe-price-ids.json` will become invalid once you create new prices. Make sure to test thoroughly before deploying to production.

⚠️ **Stripe Dashboard**: You can archive the old prices in your Stripe dashboard after confirming the new prices work correctly.

✅ **No Code Changes**: The frontend code doesn't need any changes - it automatically reads from the updated JSON files.

## Troubleshooting

If the script fails:
1. Verify your `.env` file has the correct Stripe secret key
2. Check your Stripe API key permissions
3. Make sure you have internet connectivity
4. Review the error message in the console

## Questions?

If you encounter any issues, check:
- Stripe Dashboard: https://dashboard.stripe.com/test/products
- Error logs from the setup script
- The updated JSON files for correct price IDs
