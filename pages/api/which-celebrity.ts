import type { NextApiRequest, NextApiResponse } from 'next';
import { WhichCelebrityResponse } from '@/types';
import { predictWhichCelebrity } from '@/utils/predictWhichCelebrity';
import { getSnapshotFileFromRequestBody } from '@/utils/getSnapshotFileFromRequestBody';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<WhichCelebrityResponse>
) {
  if (req.method !== 'POST') {
    console.warn(`Method ${req.method} not allowed for endpoint /which-celebrity!`);
    return res.status(405).end();
  }

  const file = await getSnapshotFileFromRequestBody(req);
  const resp = await predictWhichCelebrity(file);

  res.status(200).json(resp);
}

export const config = {
  api: {
    bodyParser: false,
  }
};
