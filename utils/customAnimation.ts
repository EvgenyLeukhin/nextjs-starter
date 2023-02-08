import { keyframes } from '@emotion/react';

export const customAnimation = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, 100px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;

export const defaultButtonRadius = 8;

export const minDesctopWidth = 1170;
