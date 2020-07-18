import styled, { keyframes } from 'styled-components';

import { MAIN_COLOR, SECONDARY_COLOR } from 'Config/Colors';

export const spin = keyframes`
  from {
    transform:  translate(-50%, -50%) rotate(0deg) scale(1);
  }

  to {
    transform: translate(-50%, -50%) rotate(360deg) scale(1.3) ;
  }
`;

export const Div = styled.div`
  border: 8px solid ${MAIN_COLOR};
  border-top: 8px solid ${SECONDARY_COLOR};
  border-radius: 50%;
  width: 80px;
  height: 80px;
  position: absolute;
  top: 50%;
  left: 50%;
  animation: ${spin} 0.75s ease-in-out infinite alternate;
`;