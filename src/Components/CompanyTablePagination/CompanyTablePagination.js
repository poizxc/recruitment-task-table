import React from 'react';
import { MobileLastInFlex, Pagination } from './CompanyTablePaginationStyles';
import CompanyTablePaginationPageNumber from 'Components/CompanyTablePaginationPageNumber';

export default ({ pages, currentPage, handleCurrentPageChange }) => {
  const isSurroundingNumber = (pageNumber) => !(pageNumber - 4 > currentPage || pageNumber + 4 < currentPage);
  const canFitInWindow = pages.length <= 10;
  return (
    <MobileLastInFlex>
      <Pagination>
        {canFitInWindow
          ? pages.map((pageNumber) => (
              <CompanyTablePaginationPageNumber
                pageNumber={pageNumber}
                currentPage={currentPage}
                handleCurrentPageChange={handleCurrentPageChange}
              />
            ))
          : pages.map((pageNumber) =>
              isSurroundingNumber(pageNumber) ? (
                <CompanyTablePaginationPageNumber
                  pageNumber={pageNumber}
                  currentPage={currentPage}
                  handleCurrentPageChange={handleCurrentPageChange}
                />
              ) : null,
            )}
      </Pagination>
    </MobileLastInFlex>
  );
};
