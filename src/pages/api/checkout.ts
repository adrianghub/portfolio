import {
  DONATION_VALUE,
  STRIPE_API_KEY
} from '@/app/buymeacoffee/constants';
import { NextApiRequest, NextApiResponse } from 'next';
import Stripe from 'stripe';

const stripe = new Stripe(STRIPE_API_KEY, {
  apiVersion: '2022-11-15'
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const name = req.body.name || 'Anonymous';
  const quantity = req.body.quantity;

  if (!quantity) {
    return res.status(400).json({ error: 'Quantity is required' });
  }

  try {
    const session = await stripe.checkout.sessions.create({
      metadata: {
        name
      },
      payment_method_types: ['card'],
      mode: 'payment',
      line_items: [
        {
          price_data: {
            currency: 'eur',
            product_data: {
              name: 'Donation'
            },
            unit_amount: DONATION_VALUE
          },
          quantity
        }
      ],

      success_url: `${req.headers.origin}/success`,
      cancel_url: `${req.headers.origin}/cancel`
    });

    const url = session.url;

    if (url) {
      return res.status(200).json({ url });
    }

    return res.status(500).json({ error: 'Something went wrong' });
  } catch (error) {
    console.log('Error creating checkout session', error);

    return res.status(500).json({ error: 'Something went wrong' });
  }
}
