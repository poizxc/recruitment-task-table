import React from 'react';
import { PageNumber } from './CompanyTablePaginationPageNumberStyles';
import PropTypes from 'prop-types';

const CompanyTablePaginationPageNumber = ({ pageNumber, currentPage, handleCurrentPageChange }) => (
  <PageNumber
    className={currentPage === pageNumber ? 'active' : undefined}
    key={pageNumber}
    onClick={() => handleCurrentPageChange(pageNumber)}
  >
    {pageNumber + 1}
  </PageNumber>
);
CompanyTablePaginationPageNumber.propTypes = {
  pageNumber: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  handleCurrentPageChange: PropTypes.func.isRequired,
};
export default CompanyTablePaginationPageNumber;
