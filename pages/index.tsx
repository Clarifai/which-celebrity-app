import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import { useCallback, useRef, useState } from "react";

export default function Home() {
  const cameraPreviewEl = useRef<HTMLVideoElement>(null);
  const [capturing, setCapturing] = useState(false);

  const beginCapture = useCallback(
    async () => {
      if (!cameraPreviewEl.current) {
        return;
      }
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      cameraPreviewEl.current.srcObject = stream;
      cameraPreviewEl.current.play();
      setCapturing(true);
    },
    [cameraPreviewEl],
  );

  const takeSnapshot = useCallback(
    () => {
      if (!cameraPreviewEl.current) {
        return;
      }
      const canvas = document.createElement('canvas');
      canvas.width = 800;
      canvas.height = 600;

      const ctx = canvas.getContext('2d');
      if (!ctx) {
        return;
      }

      ctx.drawImage(cameraPreviewEl.current, 0, 0, canvas.width, canvas.height);
      // const dataUrl = canvas.toDataURL('image/jpeg');
      // document.getElementById('frame').src = dataUrl;
      // console.log(dataUrl);
    },
    []
  );

  return (
    <>
      <Head>
        <title>Which Celebrity Am I?</title>
        <meta
          name="description"
          content="Use the power of AI to figure out which celebrity you look like!"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <h1>Which Celebrity Do you look like?</h1>
          <a onClick={beginCapture}>Click to take a photo of yourself!</a>
        </div>
        <video className={styles.video} ref={cameraPreviewEl}>
        </video>
        {capturing &&
          (
            <button className={styles.snapshot} onClick={takeSnapshot}>
              📸
            </button>
          )}
          {/* <Image alt="Preview" id="frame" src="" width={800} height={600} /> */}
      </main>
    </>
  );
}
