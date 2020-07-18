import React from 'react';
import { COLUMNS } from 'Config/Constants';
import { Row, Cell } from './CompanyTableRowStyles';
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
