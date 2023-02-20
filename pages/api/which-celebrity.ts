import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<WhichCelebrityResponse>
) {
  if (req.method !== 'POST') {
    console.warn(`Method ${req.method} not allowed for endpoint /which-celebrity!`);
    return res.status(405).end();
  }
  const score = Math.random();
  const response: WhichCelebrityResponse = score > 0.7
    ? { name: 'John Doe', score, recognized: true }
    : { recognized: false };

  res.status(200).json(response);
}
