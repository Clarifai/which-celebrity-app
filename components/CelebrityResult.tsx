import Image from "next/image";
import { WhichCelebrityResponse } from '@/types';
import styles from 'styles/CelebrityResult.module.css';

export interface CelebrityResultProps {
  snapshot: string;
  response?: WhichCelebrityResponse;
}

export default function CelebrityResult(props: CelebrityResultProps): JSX.Element {
  const thinking = !props.response;

  let output = null;
  if (props.response) {
    output = !props.response.recognized
      ? <p className={`${styles.output} ${styles.message}`}>Sorry, we have no idea who you are!</p>
      : <p className={`${styles.output} ${styles.message}`}>There&apos;s a {(props.response.score * 100).toFixed(1)}% chance you&apos;re {props.response.name}!</p>;
  }

  return (
    <div className={styles.result}>
      <Image src={props.snapshot} alt="Preview" id="frame" width={800} height={600} />
      { thinking && 
        <p className={`${styles.output} ${styles.thinking}`}>🧠</p>}
      { output }
    </div>
  );
}
