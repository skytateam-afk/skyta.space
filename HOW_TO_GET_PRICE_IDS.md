# How to Get Your Stripe Price IDs

## Quick Steps

### 1. Go to Stripe Products Page
Visit: https://dashboard.stripe.com/products

**IMPORTANT:** Make sure you're in **Live Mode** (the toggle in the top right should be OFF/gray)

### 2. Create Your First Product - Explorer Pass

1. Click **"+ Add product"**
2. Fill in:
   - **Name:** Explorer Pass
   - **Description:** Perfect for space enthusiasts
3. Under **Pricing:**
   - Click **"Add another price"** to create multiple prices
   - **Price 1 (Monthly):**
     - Amount: $4.99
     - Billing period: Monthly
     - Click "Add price"
   - **Price 2 (Yearly):**
     - Amount: $59.00
     - Billing period: Yearly
     - Click "Add price"
4. Click **"Save product"**

### 3. Copy the Price IDs

After saving, you'll see your product with two prices listed. Each price has an ID:
- Click on the monthly price → Copy the ID (looks like `price_1ABC123xyz...`)
- Click on the yearly price → Copy the ID

### 4. Repeat for Other Products

**Galaxy Insider:**
- Monthly: $6.99
- Yearly: $83.88

**Cosmic Founder:**
- One-time payment: $105.00
- Set billing period to "One time"

### 5. Update Your Code

Open `src/components/sections/PricingSection.vue` and find line ~310:

```javascript
const priceIds = {
  explorer: {
    monthly: 'price_1ABC123xyz...',  // Paste Explorer monthly price ID here
    yearly: 'price_1DEF456xyz...'    // Paste Explorer yearly price ID here
  },
  insider: {
    monthly: 'price_1GHI789xyz...',  // Paste Insider monthly price ID here
    yearly: 'price_1JKL012xyz...'    // Paste Insider yearly price ID here
  },
  founder: {
    lifetime: 'price_1MNO345xyz...'  // Paste Founder lifetime price ID here
  }
}
```

### 6. Save and Test

After updating the price IDs:
1. Save the file
2. The dev server will auto-reload
3. Click a pricing tier button
4. You should be redirected to Stripe Checkout!

## Example of What Price IDs Look Like

```
price_1QKxyzABCdefGHIjklMNOpqr
price_1QLmnoPQRstuvWXYzabCDEfg
```

They always start with `price_` followed by random characters.

## Need Help?

If you're having trouble finding the price IDs:
1. Go to https://dashboard.stripe.com/products
2. Click on a product
3. You'll see all prices listed with their IDs
4. Click the "..." menu next to a price → "Copy price ID"
