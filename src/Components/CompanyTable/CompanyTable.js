import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { API_URL } from 'Config/Constants';
import Spinner from 'Components/Spinner';
import CompanyTableHeader from 'Components/CompanyTableHeader';
import CompanyTableBody from 'Components/CompanyTableBody';
import CompanyTableControls from 'Components/CompanyTableControls';
import mockData from './mockData';
import styled from 'styled-components';
import moment from 'moment';

//todo move to utils
const lessThanMonth = (date) => {
  return moment(date).isAfter(moment().subtract(1, 'month'));
};

const splitCompaniesIntoChunks = (companies, size) =>
  companies.length > size
    ? [companies.slice(0, size), ...splitCompaniesIntoChunks(companies.slice(size), size)]
    : [companies];

const getIncomes = (incomes) => {
  const countedIncomes = incomes.reduce(
    (prev, curr) => ({
      totalIncome: parseFloat(prev.totalIncome) + parseFloat(curr.value),
      lastMonthIncome: lessThanMonth(curr.date)
        ? parseFloat(prev.lastMonthIncome) + parseFloat(curr.value)
        : prev.lastMonthIncome,
    }),
    { totalIncome: 0, lastMonthIncome: 0 },
  );
  return {
    totalIncome: countedIncomes.totalIncome,
    avgIncome: countedIncomes.totalIncome / incomes.length,
    lastMonthIncome: countedIncomes.lastMonthIncome,
  };
};
const CenteredTable = styled.table`
  margin: 0 auto;
  width: 100%;
  max-width: 900px;
`;
export default () => {
  const [companies, setCompanies] = useState([]);
  const [activeCompanies, setActiveCompanies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [companiesOnPage, setCompaniesOnPage] = useState(15);
  const [currentPage, setCurrentPage] = useState(0);
  const [filter, setFilter] = useState('');
  //todo extract constants
  const [sorting, setSorting] = useState({ column: 'id', order: 'ASC' });

  const handleCompaniesOnPageChange = (event) => {
    setCompaniesOnPage(event.target.value);
    setActiveCompanies(splitCompaniesIntoChunks(companies.flat(), event.target.value));
  };
  const handleCurrentPageChange = (event) => {
    setCurrentPage(event.target.value);
  };
  const handleFilterChange = (event) => {
    setFilter(event.target.value);
    const filteredCompanies = sortCompanies(
      companies
        .flat()
        .filter((company) =>
          Object.keys(company).some((key) =>
            String(company[key]).toLowerCase().includes(event.target.value.toLowerCase()),
          ),
        ),
      sorting.column,
      sorting.order,
    );
    setCurrentPage(0);
    setActiveCompanies(splitCompaniesIntoChunks(filteredCompanies, companiesOnPage));
  };
  const sortCompanies = (companiesArr, column, order) => {
    return companiesArr.flat().sort((company, nextCompany) => {
      if (typeof company[column] === 'number') {
        return order === 'ASC' ? company[column] - nextCompany[column] : nextCompany[column] - company[column];
      }
      return order === 'ASC'
        ? company[column].localeCompare(nextCompany[column], 'en', { sensitivity: 'base' })
        : nextCompany[column].localeCompare(company[column], 'en', { sensitivity: 'base' });
    });
  };
  const handleSortingChange = (sortingObj) => {
    const onlyOrderChanged = sortingObj.column === sorting.column;
    const order = onlyOrderChanged ? (sorting.order === 'ASC' ? 'DESC' : 'ASC') : 'ASC';
    setSorting({ ...sortingObj, order });
    const { column } = sortingObj;
    const sortedCompanies = sortCompanies(activeCompanies, column, order);
    setCurrentPage(0);
    setActiveCompanies(splitCompaniesIntoChunks(sortedCompanies, companiesOnPage));
  };
  useEffect(() => {
    async function getCompanyData() {
      try {
        const { data: companiesData } = await axios.get(`${API_URL}/companies`);
        const details = sortCompanies(await getDetailedData(companiesData), sorting.column, sorting.order);
        setActiveCompanies(splitCompaniesIntoChunks(details, companiesOnPage));
        setCompanies(details);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
        setCompanies([]);
        setActiveCompanies([]);
        setIsLoading(false);
      }
    }

    async function getDetailedData(companiesData) {
      return await Promise.all(
        companiesData.map(async (company) => {
          const {
            data: { incomes },
          } = await axios.get(`${API_URL}/incomes/${company.id}`);
          return { ...company, ...getIncomes(incomes) };
        }),
      );
    }
    getCompanyData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <main>
          <CenteredTable border="0" cellSpacing="0">
            <CompanyTableHeader sorting={sorting} handleSortingChange={handleSortingChange} />
            <CompanyTableBody visibleCompanies={activeCompanies[currentPage]} />
          </CenteredTable>
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
