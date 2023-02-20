/**
 * If Clarifai can match us with a celebrity, return the name and score.
 * Otherwise, just return `false`.
 */
type WhichCelebrityResponse = {
  recognized: typeof true;
  name: string;
  score: number;
} | {
  recognized: typeof false;
}
