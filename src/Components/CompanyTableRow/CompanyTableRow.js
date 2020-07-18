import React from 'react';
import { COLUMNS } from 'Config/Constants';
import { Row, Cell } from './CompanyTableRowStyles';
import { isOneOfIncomeColumn } from 'Utils';

export default ({ company }) => {
  return (
    <Row>
      {Object.keys(COLUMNS).map((key) => (
        <Cell key={company[key]}>{isOneOfIncomeColumn(company, key) ? company[key].toFixed(2) : company[key]}</Cell>
      ))}
    </Row>
  );
};
