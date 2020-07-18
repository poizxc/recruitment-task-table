import moment from 'moment';
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
export { splitCompaniesIntoChunks, getIncomes };
