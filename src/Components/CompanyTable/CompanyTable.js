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
const lessThanMonth = (date) => {
  return moment(date).isAfter(moment().subtract(1, 'month'));
};

//todo rewrite
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
  return { ...countedIncomes, avgIncome: countedIncomes.totalIncome / incomes.length };
};
export default () => {
  const [companies, setCompanies] = useState([]);
  const [activeCompanies, setActiveCompanies] = useState([]);

  const [isLoading, setIsLoading] = useState(true);
  const [companiesOnPage, setCompaniesOnPage] = useState(15);
  const [currentPage, setCurrentPage] = useState(0);
  const [filter, setFilter] = useState('');
  const handleCompaniesOnPageChange = (event) => {
    setCompaniesOnPage(event.target.value);
    setActiveCompanies(splitCompaniesIntoChunks(companies.flat(), event.target.value));
  };
  const handleCurrentPageChange = (event) => {
    setCurrentPage(event.target.value);
  };
  const handleFilterChange = (event) => {
    setFilter(event.target.value);
    const filteredCompanies = companies
      .flat()
      .filter((company) =>
        Object.keys(company).some((key) =>
          Object.keys(company[key]).some((nestedKey) =>
            String(company[key][nestedKey]).toLowerCase().includes(event.target.value.toLowerCase()),
          ),
        ),
      );
    setCurrentPage(0);
    setActiveCompanies(splitCompaniesIntoChunks(filteredCompanies, companiesOnPage));
  };
  useEffect(() => {
    //todo think about making it working faster eg. downloading only incomes for visible companies
    async function getCompanyData() {
      try {
        const { data: companiesData } = await axios.get(`${API_URL}/companies`);
        const details = await getDetailedData(
          companiesData.sort((company, nextCompany) => company.id - nextCompany.id),
        );
        setActiveCompanies(splitCompaniesIntoChunks(details, companiesOnPage));
        setCompanies(details);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
        setCompanies([]);
        setActiveCompanies([]);
        setIsLoading(false);
      }
      // setCompanies(
      //   splitCompaniesIntoChunks(
      //     mockData.sort((company, nextCompany) => company.id - nextCompany.id),
      //     companiesOnPage,
      //   ),
      // );
      // setIsLoading(false);
    }

    async function getDetailedData(companiesData) {
      return await Promise.all(
        companiesData.map(async (company) => {
          const {
            data: { incomes },
          } = await axios.get(`${API_URL}/incomes/${company.id}`);
          return { baseInfo: company, incomes: getIncomes(incomes) };
        }),
      );
    }
    getCompanyData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const Centered = styled.table`
    margin: 0 auto;
    width: 100%;
    max-width: 900px;
  `;
  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <main>
          <Centered border="0" cellSpacing="0">
            <CompanyTableHeader />
            <CompanyTableBody visibleCompanies={activeCompanies[currentPage]} />
          </Centered>
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
