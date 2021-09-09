import { keyframes, css } from 'styled-components';

export const skeletonGradient = keyframes`
  0%{background-position: 90% 70%}
  50%{background-position: 40% 50%}
  100%{background-position: 0% 10%}
`;

export const skeletonBackground = css`
  background: linear-gradient(90deg, #121212, #404040, #121212);
`;
