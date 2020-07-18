import React from 'react';
import styled from 'styled-components';
import CompanyTableFilterInput from 'Components/CompanyTableFilterInput';
import CompanyTableSelectPagesInput from 'Components/CompanyTableSelectPagesInput';
import CompanyTablePagination from 'Components/CompanyTablePagination';

const Div = styled.div`
padding-top: 20px;
width: 100%;
max-width: 900px;
margin: 0 auto 20px auto;
display:flex;
justify-content:space-between;
align-items:center;
flex-wrap:wrap;
`;
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
    <Div>
      <CompanyTableSelectPagesInput companiesOnPage={companiesOnPage} handleCompaniesOnPageChange={handleCompaniesOnPageChange} />
      <CompanyTablePagination pages={pages} currentPage={currentPage} handleCurrentPageChange={handleCurrentPageChange}/>
      <CompanyTableFilterInput filter={filter} handleFilterChange={handleFilterChange} />
    </Div>
  );
};
