import styled from 'styled-components';
import { SECONDARY_COLOR, MAIN_COLOR } from 'Config/Colors';
export const Header = styled.thead`
  color: ${SECONDARY_COLOR};
  border-bottom: 4px solid ${MAIN_COLOR};
`;
export const Cell = styled.th`
  padding: 15px 10px;
  text-transform: capitalize;
  text-align: left;
  position: relative;
  padding-right: 25px;
  min-width: 60px;
  cursor: pointer;
  &:after {
    position: absolute;
    right: 4px;
    display: inline-block;
    margin-left: 8px;
  }
  &.asc {
    &:after {
      content: '⬇️';
    }
  }
  &.desc {
    &:after {
      content: '⬆️';
    }
  }
`;
