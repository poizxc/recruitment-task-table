import styled from 'styled-components';
import { MAIN_COLOR, SECONDARY_COLOR } from 'Config/Colors';
export const PageNumber = styled.div`
  margin-top: 5px;
  display: inline-block;
  padding: 5px;
  text-align: center;
  min-width: 32px;
  min-height: 35px;
  border: solid 2px transparent;
  border-bottom: solid 2px ${MAIN_COLOR};
  cursor: pointer;
  &:hover {
    border: solid 2px ${MAIN_COLOR};
  }
  &.active {
    border-bottom-color: ${SECONDARY_COLOR};
  }
`;
