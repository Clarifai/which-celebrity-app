import busboy from 'busboy';
import type { NextApiRequest } from 'next';

export async function getSnapshotFileFromRequestBody(req: NextApiRequest): Promise<Buffer> {
  return new Promise((resolve, reject) => {
    const bb = busboy({
      headers: req.headers,
    });
    bb.on('file', (_name, stream, _info) => {
      const dataParts: Buffer[] = [];
      stream.on('data', (buf) => {
        dataParts.push(buf);
      });
      stream.on('end', () => {
        resolve(Buffer.concat(dataParts));
      });
      stream.on('error', (e) => {
        reject(e);
      })
    });
    req.pipe(bb);
  });
}
