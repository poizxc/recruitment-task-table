import React from 'react';
import { COLUMNS } from 'Config/Constants';
import { Header, Cell } from './CompanyTableHeaderStyles';
import PropTypes from 'prop-types';
const CompanyTableHeader = ({ sorting, handleSortingChange }) => (
  <Header>
    <tr>
      {Object.keys(COLUMNS).map((key) => (
        <Cell
          key={key}
          className={key === sorting.column && `active ${sorting.order.toLowerCase()}`}
          onClick={() => handleSortingChange({ column: key })}
        >
          {COLUMNS[key]}
        </Cell>
      ))}
    </tr>
  </Header>
);
CompanyTableHeader.propTypes = {
  sorting: PropTypes.shape({
    column: PropTypes.oneOf(['id', 'name', 'city', 'totalIncome', 'avgIncome', 'lastMonthIncome']).isRequired,
    order: PropTypes.oneOf(['ASC', 'DESC']),
  }).isRequired,
  handleSortingChange: PropTypes.func.isRequired,
};
export default CompanyTableHeader;
