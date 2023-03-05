import { useRef, useState } from 'react';
import { TMedia, TSourceMedia } from '@/types/common';
import { Play } from '@/components/icons';
import styles from './VideoPlayer.module.scss';

type TProps = {
  data: TMedia;
  maxWidth?: number;
};

const VideoPlayer = ({ data, maxWidth = 640 }: TProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isStarted, setStarted] = useState(false);

  const startPlay = () => {
    videoRef.current?.play();
    setStarted(true);
  };

  return (
    <div className={styles.VideoPlayer} style={{ maxWidth }}>
      <video ref={videoRef} width='100%' height='100%' controls>
        {data?.src?.map((source: TSourceMedia, index: number) => {
          const { link, type } = source;

          return <source key={index} src={link} type={type} />;
        })}
        {/* No support phrase */}
        Your browser does not support HTML5 video tag.
      </video>

      {/* custom poster image on start */}
      {!isStarted && data?.poster && (
        <div
          onClick={startPlay}
          className={styles.VideoPlayer__poster}
          style={{ backgroundImage: `url(${data?.poster})` }}
        >
          {/* play icon */}
          <span>
            <Play />
          </span>

          {/* posterTitle */}
          {data?.posterTitle && <h3>{data?.posterTitle}</h3>}
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;
