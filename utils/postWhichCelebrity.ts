import { WhichCelebrityResponse } from "@/types";

export async function postWhichCelebrity(snapshot: Blob): Promise<WhichCelebrityResponse> {
  const formdata = new FormData();
  formdata.set('snapshot', snapshot);

  const request: RequestInit = {
    method: 'POST',
    body: formdata,
  };

  const resp = await fetch('/api/which-celebrity', request);
  const json: WhichCelebrityResponse = await resp.json();
  return json;
}
