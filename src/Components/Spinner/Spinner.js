import styled, { keyframes } from 'styled-components';
import React from 'react';

import { SECONDARY_COLOR, MAIN_COLOR } from 'Config/Colors';

const spin = keyframes`
  from {
    transform:  translate(-50%, -50%) rotate(0deg);
  }

  to {
    transform: translate(-50%, -50%) rotate(360deg);
  }
`;

const Div = styled.div`
  border: 8px solid ${SECONDARY_COLOR};
  border-top: 8px solid ${MAIN_COLOR};
  border-radius: 50%;
  width: 80px;
  height: 80px;
  position: absolute;
  top: 50%;
  left: 50%;
  animation: ${spin} 0.6s linear infinite;
`;
export default () => <Div></Div>;
