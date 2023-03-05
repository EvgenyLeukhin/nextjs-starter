import { TMedia } from '@/types/common';
import { googleDriveLink } from './common';

const VIDEO = 'video/mp4';

export const mediaSource1: TMedia = {
  posterTitle: 'Big Buck Bunny',
  poster:
    'https://resizer.mail.ru/p/f211f81a-7ec1-5e37-ae86-cb8136823ec1/dpr:133/AAACCfyTZokFA46CppsGytluzDmUzdqDdCxPEqrT12hKVQ82Hyp7yy0JCmcRYhMN5hqoAHldJ-f-xlNbxOel5DXWzq4.jpg',
  src: [
    {
      link: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
      type: VIDEO,
    },
  ],
};

export const mediaSource2: TMedia = {
  posterTitle: '',
  poster: '',
  src: [
    {
      link: `${googleDriveLink}=1f_CY3X1X1rV4xSwLiFdkNHSwHiUZayL1`,
      type: VIDEO,
    },
    {
      link: `${googleDriveLink}=10gGnmwJYzMIozWuw7YREuPU3jscY5d1i`,
      type: VIDEO,
    },
  ],
};
