import { VideoPlayer } from '@/components/ui';
import { mediaSource1, mediaSource2 } from '@/consts/mediaSource';

const VideoExample = () => {
  return (
    <section>
      <h2>Video players</h2>

      <h3>Sigle video with custom poster</h3>
      <VideoPlayer data={mediaSource1} />

      <hr />

      <h3>From Google Disk</h3>
      <VideoPlayer data={mediaSource2} />

      <hr />

      <h3>YouTube frame</h3>
      <iframe
        width='640'
        height='360'
        src='https://www.youtube.com/embed/PsOWveX_9kU'
        title='YouTube video player'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen;'
      />

      <hr />

      <h3>Vimeo frame</h3>
      <iframe
        src='https://player.vimeo.com/video/37101774?h=0147c3ca9a'
        width='640'
        height='360'
        allow='autoplay; fullscreen; picture-in-picture'
      ></iframe>
    </section>
  );
};

export default VideoExample;
