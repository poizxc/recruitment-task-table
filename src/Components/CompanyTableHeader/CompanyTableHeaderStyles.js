import styled from 'styled-components';
import { SECONDARY_COLOR, MAIN_COLOR } from 'Config/Colors';
export const Header = styled.thead`
  color: ${SECONDARY_COLOR};
  border-bottom: 4px solid ${MAIN_COLOR};
`;
export const Cell = styled.th`
  padding: 12px 8px;
  text-transform: capitalize;
  text-align: left;
  position: relative;
  padding-right: 22px;
  min-width: 60px;
  white-space: nowrap;
  cursor: pointer;
  &.active,
  &:hover {
    border-bottom: 4px solid ${SECONDARY_COLOR};
  }
  &:after {
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
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
