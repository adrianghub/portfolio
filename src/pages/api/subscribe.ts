import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { email, name } = req.body;

  if (!email) {
    return res.status(400).json({ error: 'Email is required' });
  }

  try {
    const result = await fetch(
      'https://connect.mailerlite.com/api/subscribers',
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_MAILERLITE_API_TOKEN}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email,
          fields: {
            name
          },
          double_optin: true
        })
      }
    );

    const data = await result.json();

    if (!result.ok) {
      return res.status(500).json({ error: data.error.email[0] });
    }
  } catch (error) {
    if (error instanceof Error) {
      return res.status(400).json({ error: error.message });
    }
  }

  res.status(201).json({ error: '' });
}
