import React from 'react';
import styled from 'styled-components';
import { COLUMNS } from 'Config/Constants';
import { MAIN_COLOR, SECONDARY_COLOR } from 'Config/Colors';
const Header = styled.thead`
  color: ${MAIN_COLOR};
  border-bottom: 4px solid ${SECONDARY_COLOR};
`;
const Cell = styled.th`
  padding: 15px 10px;
  text-transform: capitalize;
  text-align: left;
  position: relative;
  padding-right: 25px;
  min-width: 60px;
  cursor:pointer;
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

export default ({ sorting, handleSortingChange }) => (
  <Header>
    <tr>
      {Object.keys(COLUMNS).map((key) => (
        <Cell
          key={key}
          className={key === sorting.column && sorting.order.toLowerCase()}
          onClick={() => handleSortingChange({ column: key })}
        >
          {COLUMNS[key]}
        </Cell>
      ))}
    </tr>
  </Header>
);
