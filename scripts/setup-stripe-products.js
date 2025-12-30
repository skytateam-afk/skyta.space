import Stripe from 'stripe';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { writeFileSync } from 'fs';

// Load environment variables
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
dotenv.config({ path: join(__dirname, '..', '.env') });

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// Define all pricing tiers
const pricingTiers = [
  {
    name: 'Skyta Learning Portal - Early Bird',
    description: 'Full AI-powered learning access with unlimited Felix assistant, gamified challenges, and basic AR exploration.',
    tier: 'earlybird',
    prices: [
      {
        amount: 1999, // $19.99
        currency: 'usd',
        interval: 'month',
        nickname: 'Early Bird Monthly'
      },
      {
        amount: 15488, // $154.88 (yearly rate from frontend)
        currency: 'usd',
        interval: 'year',
        nickname: 'Early Bird Yearly'
      }
    ]
  },
  {
    name: 'Skyta Learning Portal - Premium',
    description: 'Advanced features with real-time satellite tracking, advanced AI insights, full AR + voice learning, and personalized learning paths.',
    tier: 'premium',
    prices: [
      {
        amount: 2999, // $29.99
        currency: 'usd',
        interval: 'month',
        nickname: 'Premium Monthly'
      },
      {
        amount: 22799, // $227.99 (yearly rate from frontend)
        currency: 'usd',
        interval: 'year',
        nickname: 'Premium Yearly'
      }
    ]
  },
  {
    name: 'Skyta Learning Portal - Cosmic Founder',
    description: 'Lifetime Premium access with exclusive Cosmic Founder badge, VIP beta testing, priority feature requests, and annual virtual meetup.',
    tier: 'founder',
    prices: [
      {
        amount: 15499, // $154.99
        currency: 'usd',
        type: 'one_time',
        nickname: 'Cosmic Founder Lifetime'
      }
    ]
  }
];

async function setupStripeProducts() {
  console.log('🚀 Starting Stripe product setup...\n');
  
  const priceIdMapping = {};

  try {
    for (const tier of pricingTiers) {
      console.log(`📦 Creating product: ${tier.name}`);
      
      // Create product
      const product = await stripe.products.create({
        name: tier.name,
        description: tier.description,
        metadata: {
          tier: tier.tier
        }
      });

      console.log(`✅ Product created: ${product.id}`);
      
      // Initialize tier in mapping
      priceIdMapping[tier.tier] = {};

      // Create prices for this product
      for (const priceConfig of tier.prices) {
        console.log(`  💰 Creating price: ${priceConfig.nickname}`);
        
        const priceData = {
          product: product.id,
          currency: priceConfig.currency,
          unit_amount: priceConfig.amount,
          nickname: priceConfig.nickname,
          metadata: {
            tier: tier.tier
          }
        };

        // Add recurring or one-time configuration
        if (priceConfig.type === 'one_time') {
          // One-time payment (for Cosmic Founder)
          priceData.billing_scheme = 'per_unit';
        } else {
          // Recurring subscription
          priceData.recurring = {
            interval: priceConfig.interval
          };
        }

        const price = await stripe.prices.create(priceData);
        
        console.log(`  ✅ Price created: ${price.id}`);

        // Store price ID in mapping
        if (priceConfig.type === 'one_time') {
          priceIdMapping[tier.tier].lifetime = price.id;
        } else {
          priceIdMapping[tier.tier][priceConfig.interval + 'ly'] = price.id;
        }
      }

      console.log('');
    }

    // Save price IDs to a JSON file
    const outputPath = join(__dirname, '..', 'stripe-price-ids.json');
    const publicOutputPath = join(__dirname, '..', 'public', 'stripe-price-ids.json');
    
    writeFileSync(outputPath, JSON.stringify(priceIdMapping, null, 2));
    writeFileSync(publicOutputPath, JSON.stringify(priceIdMapping, null, 2));
    
    console.log('✨ All products and prices created successfully!\n');
    console.log('📄 Price IDs saved to: stripe-price-ids.json\n');
    console.log('📄 Price IDs also saved to: public/stripe-price-ids.json\n');
    console.log('Price ID Mapping:');
    console.log(JSON.stringify(priceIdMapping, null, 2));
    console.log('\n🔧 Next steps:');
    console.log('1. Copy the price IDs to your .env file or use the JSON file');
    console.log('2. Update your frontend to use these price IDs');
    console.log('3. Deploy to Vercel with the updated configuration\n');

    return priceIdMapping;
  } catch (error) {
    console.error('❌ Error setting up Stripe products:', error.message);
    throw error;
  }
}

// Run the setup
setupStripeProducts()
  .then(() => {
    console.log('✅ Setup completed successfully!');
    process.exit(0);
  })
  .catch((error) => {
    console.error('❌ Setup failed:', error);
    process.exit(1);
  });
