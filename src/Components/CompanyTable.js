import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { API_URL } from 'Config/Constants';
import Spiner from 'Components/Spiner';
export default () => {
  const [companies, setCompanies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getCompanyData() {
      try {
        const { data: companiesData } = await axios.get(`${API_URL}/companies`);
        setCompanies(await getDetailedData(companiesData));
        setIsLoading(false);
      } catch (error) {
        console.error(error);
        setCompanies([]);
        setIsLoading(false);
      }
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
  },[]);
  return (
    <>
      {isLoading ? (
        <Spiner/>
      ) : (
        <table>
          <thead>
            <tr>
              <th>id</th>
              <th>name</th>
              <th>city</th>
              <th>total income</th>
              <th>average income</th>
              <th>last month income</th>
            </tr>
          </thead>
          <tbody>
            {companies.length ? (
              companies.map(({ baseInfo, incomes }) => (
                <tr key={baseInfo.id}>
                  <td>{baseInfo.id}</td>
                  <td>{baseInfo.name}</td>
                  <td>{baseInfo.city}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6"> No Data Fetched</td>
              </tr>
            )}
          </tbody>
        </table>
      )}
    </>
  );
};
