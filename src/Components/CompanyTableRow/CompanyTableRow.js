import React from 'react';
import styled from 'styled-components';
import { SECONDARY_COLOR, BRIGHT_COLOR, MAIN_COLOR } from 'Config/Colors';
import { COLUMNS } from 'Config/Constants';
import { roundOnlyIfNeeded } from 'Utils';

const Cell = styled.td`
  padding: 15px 10px;
`;
const Row = styled.tr`
  border-bottom: 1px solid ${SECONDARY_COLOR};
  // border-right: 1px solid ${SECONDARY_COLOR};
  // border-left: 1px solid ${SECONDARY_COLOR};

  &:hover {
    // color: ${BRIGHT_COLOR};
    background-color: ${BRIGHT_COLOR};
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
