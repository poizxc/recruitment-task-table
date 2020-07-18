import React from 'react';
import { MobileLastInFlex, PageNumber } from './CompanyTablePaginationStyles';

export default ({ pages, currentPage, handleCurrentPageChange }) => (
  <MobileLastInFlex>
    {pages.map((pageNumber) => (
      <PageNumber
        className={currentPage === pageNumber ? 'active' : undefined}
        key={pageNumber}
        onClick={() => handleCurrentPageChange(pageNumber)}
      >
        {pageNumber + 1}
      </PageNumber>
    ))}
  </MobileLastInFlex>
);
