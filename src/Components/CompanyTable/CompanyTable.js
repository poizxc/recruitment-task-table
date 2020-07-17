import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { API_URL } from 'Config/Constants';
import Spinner from 'Components/Spinner';
import CompanyTableHeader from 'Components/CompanyTableHeader';
import CompanyTableBody from 'Components/CompanyTableBody';
import CompanyTableControls from 'Components/CompanyTableControls';
import mockData from './mockData';
import styled from 'styled-components';

//todo revrite
const splitCompaniesIntoChunks = (companies, size) =>
  companies.length > size
    ? [companies.slice(0, size), ...splitCompaniesIntoChunks(companies.slice(size), size)]
    : [companies];
export default () => {
  const [companies, setCompanies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [companiesOnPage, setCompaniesOnPage] = useState(15);
  const [currentPage, setCurrentPage] = useState(0);
  const handleCompaniesOnPageChange = (event) => {
    setCompaniesOnPage(event.target.value);
    setCompanies(splitCompaniesIntoChunks(companies.flat(), event.target.value));
  };
  const handleCurrentPageChange = (event) => {
    setCurrentPage(event.target.value);
  };
  useEffect(() => {
    //todo think about making it working faster eg. downloading only incomes for visible companies
    async function getCompanyData() {
      // try {
      //   const { data: companiesData } = await axios.get(`${API_URL}/companies`);
      //   const details = splitCompaniesIntoChunks(
      //     await getDetailedData(companiesData.sort((company, nextCompany) => company.id - nextCompany.id)),
      //     companiesOnPage,
      //   );
      //   setCompanies(details);
      //   setIsLoading(false);
      // } catch (error) {
      //   console.error(error);
      //   setCompanies([]);
      //   setIsLoading(false);
      // }
      setCompanies(
        splitCompaniesIntoChunks(
          mockData.sort((company, nextCompany) => company.id - nextCompany.id),
          companiesOnPage,
        ),
      );
      setIsLoading(false);
    }
    async function getDetailedData(companiesData) {
      return await Promise.all(
        companiesData.map(async (company) => {
          const {
            data: { incomes },
          } = await axios.get(`${API_URL}/incomes/${company.id}`);
          return { baseInfo: company, incomes };
        }),
      );
    }
    getCompanyData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const Centered = styled.table`
    margin: 0 auto;
    width:100%;
    max-width:900px;
  `;
  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <main>
          <Centered border="0" cellSpacing="0">
            <CompanyTableHeader />
            <CompanyTableBody visibleCompanies={companies[currentPage]} />
          </Centered>
          <CompanyTableControls
            companiesOnPage={companiesOnPage}
            handleCompaniesOnPageChange={handleCompaniesOnPageChange}
            currentPage={currentPage}
            handleCurrentPageChange={handleCurrentPageChange}
            possiblePages={companies.length}
          />
        </main>
      )}
    </>
  );
};
