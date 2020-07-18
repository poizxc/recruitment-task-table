import styled from 'styled-components';
import { MAIN_COLOR } from 'Config/Colors';
export const PageNumber = styled.div`
  display: inline-block;
  padding: 5px;
  min-height: 35px;
  border: solid 2px transparent;
  border-bottom: solid 2px ${MAIN_COLOR};
  cursor: pointer;
  &:hover {
    border: solid 2px ${MAIN_COLOR};
  }
`;
export const MobileLastInFlex = styled.div`
  @media only screen and (max-width: 768px) {
    order: 3;
    margin-top: 20px;
  }
`;
