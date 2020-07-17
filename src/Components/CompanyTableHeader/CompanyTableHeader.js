import React from 'react';
import styled from 'styled-components';
import { COLUMNS } from 'Config/Constants';
import { BRIGHT_COLOR, MAIN_COLOR, SECONDARY_COLOR } from 'Config/Colors';
const Header = styled.thead`
  color: ${BRIGHT_COLOR};
  background-color: ${MAIN_COLOR};
`;
const Cell = styled.th`
  padding: 15px 10px;
  border: 1px solid ${SECONDARY_COLOR};
  text-transform: capitalize;
  &.active {
    background-color: ${SECONDARY_COLOR};
  }
`;

export default ({ sorting, handleSortingChange }) => (
  <Header>
    <tr>
      {Object.keys(COLUMNS).map((key) => (
        <Cell className={key === sorting.column && 'active'} onClick={() => handleSortingChange({ column: key })}>
          {COLUMNS[key]}
        </Cell>
      ))}
    </tr>
  </Header>
);
