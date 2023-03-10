import { VideoPlayer } from '@/components/ui';
import {
  mediaSource1,
  mediaSource2,
  vimeoLink,
  youtubeLink,
} from '@/consts/mediaSource';
import styles from './VideoExample.module.scss';

const VideoExample = () => {
  return (
    <section className={styles.VideoExample}>
      <h2>Video players</h2>

      <h3>Single video with custom poster</h3>
      <VideoPlayer data={mediaSource1} />

      <hr />

      <h3>From Google Drive</h3>
      <VideoPlayer data={mediaSource2} />

      <hr />

      <h3>YouTube frame</h3>
      <div className={styles.VideoExample__youTube}>
        <iframe
          width='640'
          height='360'
          src={`${youtubeLink}/PsOWveX_9kU`}
          title='YouTube video player'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen;'
        />
      </div>

      <hr />

      <h3>Vimeo frame</h3>

      <div className={styles.VideoExample__vimeo}>
        <iframe
          src={`${vimeoLink}/37101774?h=0147c3ca9a`}
          width='640'
          height='360'
          allow='autoplay; fullscreen; picture-in-picture'
        />
      </div>
    </section>
  );
};

export default VideoExample;
