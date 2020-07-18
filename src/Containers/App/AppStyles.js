import styled from 'styled-components';
import { SECONDARY_COLOR } from 'Config/Colors';
export const AppHeader = styled.header`
  border-bottom: 2px solid ${SECONDARY_COLOR};
  margin-bottom: 20px;
  color: ${SECONDARY_COLOR};
`;
export const AppTitle = styled.h1`
  text-align: center;
`;
export const ReflectedSpan = styled.span`
  transform: scaleX(-1);
  display: inline-block;
`;
