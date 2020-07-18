import React from 'react';
import { COLUMNS } from 'Config/Constants';
import { Row, Cell } from './CompanyTableRowStyles';
import { isOneOfIncomeColumn } from 'Utils';
import PropTypes from 'prop-types';

const CompanyTableRow = ({ company }) => {
  return (
    <Row>
      {Object.keys(COLUMNS).map((key) => (
        <Cell key={company[key]}>{isOneOfIncomeColumn(company, key) ? company[key].toFixed(2) : company[key]}</Cell>
      ))}
    </Row>
  );
};

CompanyTableRow.propTypes = {
  company: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    totalIncome: PropTypes.number.isRequired,
    avgIncome: PropTypes.number.isRequired,
    lastMonthIncome: PropTypes.number.isRequired,
  }).isRequired,
};
export default CompanyTableRow;
