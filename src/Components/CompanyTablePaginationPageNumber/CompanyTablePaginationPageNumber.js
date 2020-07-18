import React from 'react';
import { PageNumber } from './CompanyTablePaginationPageNumberStyles';

export default ({ pageNumber, currentPage, handleCurrentPageChange }) => (
  <PageNumber
    className={currentPage === pageNumber ? 'active' : undefined}
    key={pageNumber}
    onClick={() => handleCurrentPageChange(pageNumber)}
  >
    {pageNumber + 1}
  </PageNumber>
);
