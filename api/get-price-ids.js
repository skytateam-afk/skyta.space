import { readFileSync } from 'fs';
import { join } from 'path';

export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  // Handle preflight request
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  // Only allow GET
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Read price IDs from the JSON file
    const priceIdsPath = join(process.cwd(), 'stripe-price-ids.json');
    const priceIdsData = readFileSync(priceIdsPath, 'utf-8');
    const priceIds = JSON.parse(priceIdsData);

    res.status(200).json({
      success: true,
      priceIds
    });
  } catch (error) {
    console.error('Error reading price IDs:', error);
    
    // If file doesn't exist, return a helpful error
    if (error.code === 'ENOENT') {
      return res.status(404).json({
        success: false,
        error: 'Price IDs not configured',
        message: 'Please run the setup script: npm run setup:stripe'
      });
    }

    res.status(500).json({
      success: false,
      error: 'Failed to load price IDs',
      message: error.message
    });
  }
}
