import styled from 'styled-components';
import { MAIN_COLOR } from 'Config/Colors';

export const Select = styled.select`
  width: 100%;
  font-size: 16px;
  height: 100%;
  appearance: none;
  padding-left: 10px;
  border: 0px;
  cursor: pointer;
  border-bottom: solid 2px ${MAIN_COLOR};
  &:focus {
    outline: none;
    border-color: ${MAIN_COLOR};
    border: solid 2px ${MAIN_COLOR};
    border-radius: 2px;
  }
`;
export const Wrapper = styled.div`
  position: relative;
  width: 70px;
  height: 35px;
  &:after {
    display: block;
    position: absolute;
    content: '⬇️';
    right: 6px;
    top: 9px;
    pointer-events: none;
  }
`;
