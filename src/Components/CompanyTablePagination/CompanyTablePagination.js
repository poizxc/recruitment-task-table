import React from 'react';
import { MobileLastInFlex, Pagination } from './CompanyTablePaginationStyles';
import CompanyTablePaginationPageNumber from 'Components/CompanyTablePaginationPageNumber';
import PropTypes from 'prop-types';

const CompanyTablePagination = ({ pages, currentPage, handleCurrentPageChange }) => {
  const isSurroundingNumber = (pageNumber) => !(pageNumber - 4 > currentPage || pageNumber + 4 < currentPage);
  const canFitInWindow = pages.length <= 10;
  return (
    <MobileLastInFlex>
      <Pagination>
        {canFitInWindow
          ? pages.map((pageNumber) => (
              <CompanyTablePaginationPageNumber
                key={pageNumber}
                pageNumber={pageNumber}
                currentPage={currentPage}
                handleCurrentPageChange={handleCurrentPageChange}
              />
            ))
          : pages.map((pageNumber) =>
              isSurroundingNumber(pageNumber) ? (
                <CompanyTablePaginationPageNumber
                  key={pageNumber}
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

CompanyTablePagination.propTypes = {
  pages: PropTypes.array.isRequired,
  currentPage: PropTypes.number.isRequired,
  handleCurrentPageChange: PropTypes.func.isRequired,
};
export default CompanyTablePagination;
