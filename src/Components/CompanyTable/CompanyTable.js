import React from 'react';
import { ASC, DESC } from 'Config/Constants';
import Spinner from 'Components/Spinner';
import CompanyTableHeader from 'Components/CompanyTableHeader';
import CompanyTableBody from 'Components/CompanyTableBody';
import CompanyTableControls from 'Components/CompanyTableControls';
import { splitCompaniesIntoChunks, sortCompanies, filterThenSortCompanies } from 'Utils';
import { CenteredTable, Wrapper } from './CompanyTableStyles';
import UseCompanyData from 'Hooks/UseCompanyData';

export default () => {
  const {
    sorting,
    setSorting,
    setCompaniesOnPage,
    companiesOnPage,
    activeCompanies,
    setActiveCompanies,
    currentPage,
    setCurrentPage,
    setFilter,
    filter,
    isLoading,
    companies,
  } = UseCompanyData();

  const handleCompaniesOnPageChange = (event) => {
    setCompaniesOnPage(event.target.value);
    setCurrentPage(0);
    setActiveCompanies(splitCompaniesIntoChunks(activeCompanies.flat(), event.target.value));
  };

  const handleCurrentPageChange = (page) => {
    setCurrentPage(page);
  };

  //todo implement debounce
  const handleFilterChange = (event) => {
    setFilter(event.target.value);
    const filteredCompanies = filterThenSortCompanies(event.target.value, companies, sorting);
    setCurrentPage(0);
    setActiveCompanies(splitCompaniesIntoChunks(filteredCompanies, companiesOnPage));
  };

  const handleSortingChange = (sortingObj) => {
    const onlyOrderChanged = sortingObj.column === sorting.column;
    const order = onlyOrderChanged ? (sorting.order === ASC ? DESC : ASC) : ASC;
    setSorting({ ...sortingObj, order });
    const { column } = sortingObj;
    const sortedCompanies = sortCompanies(activeCompanies, column, order);
    setCurrentPage(0);
    setActiveCompanies(splitCompaniesIntoChunks(sortedCompanies, companiesOnPage));
  };

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <main>
          <Wrapper>
            <CenteredTable border="0" cellSpacing="0">
              <CompanyTableHeader sorting={sorting} handleSortingChange={handleSortingChange} />
              <CompanyTableBody visibleCompanies={activeCompanies[currentPage]} />
            </CenteredTable>
          </Wrapper>
          <CompanyTableControls
            companiesOnPage={companiesOnPage}
            handleCompaniesOnPageChange={handleCompaniesOnPageChange}
            currentPage={currentPage}
            handleCurrentPageChange={handleCurrentPageChange}
            possiblePages={activeCompanies.length}
            handleFilterChange={handleFilterChange}
            filter={filter}
          />
        </main>
      )}
    </>
  );
};
