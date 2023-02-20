/**
 * If Clarifai can match us with a celebrity, return the name and score.
 * Otherwise, just return `false`.
 */
export type WhichCelebrityResponse = {
  recognized: true;
  name: string;
  score: number;
} | {
  recognized: false;
}
