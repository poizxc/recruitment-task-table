import moment from 'moment';
import { ASC, DESC } from 'Config/Constants';
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

const isOneOfIncomeColumn = (company, key) => typeof company[key] === 'number' && key !== 'id';
const sortCompanies = (companiesArr, column, order) => {
  return companiesArr.flat().sort((company, nextCompany) => {
    if (typeof company[column] === 'number') {
      return order === ASC ? company[column] - nextCompany[column] : nextCompany[column] - company[column];
    }
    return order === ASC
      ? company[column].localeCompare(nextCompany[column], 'en', { sensitivity: 'base' })
      : nextCompany[column].localeCompare(company[column], 'en', { sensitivity: 'base' });
  });
};
export { sortCompanies, isOneOfIncomeColumn, splitCompaniesIntoChunks, getIncomes };
