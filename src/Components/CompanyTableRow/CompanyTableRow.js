import React from 'react';
import styled from 'styled-components';
import { SECONDARY_COLOR, BRIGHT_COLOR, MAIN_COLOR } from 'Config/Colors';
import { COLUMNS } from 'Config/Constants';
const Cell = styled.td`
  padding: 15px 10px;
  border: 1px solid ${SECONDARY_COLOR};
`;
const Row = styled.tr`
  &:nth-child(odd) {
    background: ${BRIGHT_COLOR};
  }
  &:hover {
    background-color: ${SECONDARY_COLOR};
    td {
      border-color: ${MAIN_COLOR};
    }
  }
`;
export default ({ company }) => {
  return (
    <Row>
      {Object.keys(COLUMNS).map((key) => (
        <Cell key={company[key]}>
          {typeof company[key] === 'number' && key !== 'id' ? company[key].toFixed(2) : company[key]}
        </Cell>
      ))}
    </Row>
  );
};
