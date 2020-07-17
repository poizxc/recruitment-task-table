import React from 'react';
import styled from 'styled-components';
import { SECONDARY_COLOR, BRIGHT_COLOR, MAIN_COLOR } from 'Config/Colors';
import moment from 'moment';
const lessThanMonth = (date) => {
  return moment(date).isAfter(moment().subtract(1, 'month'));
};
const getIncomes = (incomes) => {
  const countedIncomes = incomes.reduce(
    (prev, curr) => {
      return {
        totalIncome: parseFloat(prev.totalIncome) + parseFloat(curr.value),
        lastMonthIncome: lessThanMonth(curr.date)
          ? parseFloat(prev.lastMonthIncome) + parseFloat(curr.value)
          : prev.lastMonthIncome,
      };
    },
    { totalIncome: 0, lastMonthIncome: 0 },
  );
  return { ...countedIncomes, avgIncome: countedIncomes.totalIncome / incomes.length };
};
export default ({ baseInfo, incomes }) => {
  const { totalIncome, lastMonthIncome, avgIncome } = getIncomes(incomes);
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
