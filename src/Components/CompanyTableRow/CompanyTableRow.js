import React from 'react';
import styled from 'styled-components';
import { SECONDARY_COLOR, BRIGHT_COLOR, MAIN_COLOR } from 'Config/Colors';


export default ({ baseInfo, incomes }) => {
  const { totalIncome, lastMonthIncome, avgIncome } = incomes;
  const Cell = styled.td`
    padding: 15px 10px;
    border: 1px solid ${SECONDARY_COLOR};
  `;
  //   todo think about animation
  const Row = styled.tr`
    //transition: 0.09s linear;
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
  return (
    <Row>
      <Cell>{baseInfo.id}</Cell>
      <Cell>{baseInfo.name}</Cell>
      <Cell>{baseInfo.city}</Cell>
      <Cell>{totalIncome.toFixed(2)}</Cell>
      <Cell>{avgIncome.toFixed(2)}</Cell>
      <Cell>{lastMonthIncome.toFixed(2)}</Cell>
    </Row>
  );
};
