# Enable Stripe Client-Only Checkout

## Quick Fix (10 seconds)

1. Go to: https://dashboard.stripe.com/settings/checkout
2. Scroll to **"Client-only integration"**
3. Toggle it **ON**
4. Click **Save**

That's it! Then refresh your app and try again.

## OR: Use Backend Approach (Recommended)

The backend approach is actually better for production because:
- ✅ More secure
- ✅ Better control
- ✅ Recommended by Stripe
- ✅ Already set up in your project

To use the backend approach:

```bash
# Install Vercel CLI (if not installed)
npm install -g vercel

# Run with backend
vercel dev
```

This will start both your frontend AND the backend API, so everything works together.

## Why Backend is Better

**Client-only (v7):**
- ❌ Deprecated by Stripe
- ❌ Less secure
- ❌ Requires manual dashboard setting
- ✅ Simpler for quick testing

**Backend approach (v8):**
- ✅ Modern and recommended
- ✅ More secure
- ✅ No dashboard settings needed
- ✅ Better for production
- ✅ Already set up in your project!

## Recommendation

Since you already have the backend set up, just use `vercel dev` instead of `npm run dev`. It's the same experience but with the backend running too.
