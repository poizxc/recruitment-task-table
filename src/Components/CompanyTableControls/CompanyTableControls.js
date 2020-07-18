import React from 'react';
import CompanyTableFilterInput from 'Components/CompanyTableFilterInput';
import CompanyTableSelectPagesInput from 'Components/CompanyTableSelectPagesInput';
import CompanyTablePagination from 'Components/CompanyTablePagination';
import {Wrapper} from './CompanyTableControlsStyles'
export default ({
  companiesOnPage,
  currentPage,
  handleCompaniesOnPageChange,
  handleCurrentPageChange,
  possiblePages,
  filter,
  handleFilterChange,
}) => {
  const pages = Array.from({ length: possiblePages }, (x, i) => i);
  return (
    <Wrapper>
      <CompanyTableSelectPagesInput companiesOnPage={companiesOnPage} handleCompaniesOnPageChange={handleCompaniesOnPageChange} />
      <CompanyTablePagination pages={pages} currentPage={currentPage} handleCurrentPageChange={handleCurrentPageChange}/>
      <CompanyTableFilterInput filter={filter} handleFilterChange={handleFilterChange} />
    </Wrapper>
  );
};
