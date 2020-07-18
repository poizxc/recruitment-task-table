import styled from 'styled-components';
import { MAIN_COLOR } from 'Config/Colors';
export const Wrapper = styled.div`
  position: relative;
  width: 210px;
  height: 35px;
  &:after {
    display: block;
    position: absolute;
    content: ' 🔎';
    right: 6px;
    top: 9px;
    pointer-events: none;
  }
`;
export const StyledInput = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  border-bottom: solid 2px ${MAIN_COLOR};
  border-radius: 2px;
  &:focus {
    outline: none;
    border: solid 2px ${MAIN_COLOR};
  }
`;
