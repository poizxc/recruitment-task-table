import { useEffect, useState } from 'react';
import { splitCompaniesIntoChunks, getIncomes, sortCompanies } from 'Utils';
import axios from 'axios';
import { API_URL, ASC } from 'Config/Constants';

export default () => {
  const [companies, setCompanies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [activeCompanies, setActiveCompanies] = useState([]);
  const [companiesOnPage, setCompaniesOnPage] = useState(15);
  const [currentPage, setCurrentPage] = useState(0);
  const [filter, setFilter] = useState('');
  const [sorting, setSorting] = useState({ column: 'id', order: ASC });

  useEffect(() => {
    const getCompanyData = async () => {
      try {
        setIsLoading(true);
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
    };

    const getDetailedData = async (companiesData) =>
      await Promise.all(
        companiesData.map(async (company) => {
          const {
            data: { incomes },
          } = await axios.get(`${API_URL}/incomes/${company.id}`);
          return { ...company, ...getIncomes(incomes) };
        }),
      );

    getCompanyData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
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
  };
};
