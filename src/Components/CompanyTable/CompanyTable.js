import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { API_URL } from 'Config/Constants';
import Spinner from 'Components/Spinner';
import CompanyTableHeader from './CompanyTableHeader';
import CompanyTableBody from './CompanyTableBody';
import mockData from './mockData';
import styled from 'styled-components';

export default () => {
  const [companies, setCompanies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    //todo think about making it working faster eg. downloading only incomes for visible companies
    async function getCompanyData() {
      // try {
      //   const { data: companiesData } = await axios.get(`${API_URL}/companies`);
      //   setCompanies(await getDetailedData(companiesData));
      //   setIsLoading(false);
      // } catch (error) {
      //   console.error(error);
      //   setCompanies([]);
      //   setIsLoading(false);
      // }
      setCompanies(mockData);
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
  }, []);
  const Centered = styled.table`
  margin: 0 auto;
  `
  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <Centered border="0" cellSpacing="0">
          <CompanyTableHeader />
          <CompanyTableBody companies={companies}/>
        </Centered>
      )}
    </>
  );
};
