import {
  sortCompanies,
  filterCompanies,
  isOneOfIncomeColumn,
  splitCompaniesIntoChunks,
  getIncomes,
  lessThanMonth,
} from './index';
import moment from 'moment';

describe('lessThanMonth', () => {
  test('should return true', () => {
    const monthAgoWithSecond = moment().subtract(1, 'months').add(1, 'Second');

    expect(lessThanMonth(monthAgoWithSecond.toISOString())).toBe(true);
  });

  test('should return false', () => {
    const monthAgoWithoutSecond = moment().subtract(1, 'months').subtract(2, 'Second');

    expect(lessThanMonth(monthAgoWithoutSecond.toISOString())).toBe(false);
  });
});

describe('isOneOfIncomeColumn', () => {
  test('should return true', () => {
    const company = {
      id: 1,
      anotherNumber: 2,
      stringType: '',
    };
    expect(isOneOfIncomeColumn(company, 'anotherNumber')).toBe(true);
  });
  test('should return false for key id', () => {
    const company = {
      id: 1,
      anotherNumber: 2,
      stringType: '',
    };

    expect(isOneOfIncomeColumn(company, 'id')).toBe(false);
  });
  test('should return false for value typeof !number', () => {
    const company = {
      id: 1,
      anotherNumber: 2,
      stringType: '',
    };

    expect(isOneOfIncomeColumn(company, 'stringType')).toBe(false);
  });
});

const MockIncomes = [
  {
    value: 1000.2,
    date: moment().subtract(5, 'days'),
  },
  {
    value: 2000.36,
    date: moment().subtract(29, 'days'),
  },
  {
    value: 3000.1,
    date: '2019-01-18T22:50:15.688Z',
  },
];
describe('getIncomes', () => {
  test('should return correct average', () => {
    expect(getIncomes(MockIncomes).avgIncome).toBe(2000.22);
  });
  test('should return correct total', () => {
    expect(getIncomes(MockIncomes).totalIncome).toBe(6000.66);
  });
  test('should return correct lastMonth', () => {
    expect(getIncomes(MockIncomes).lastMonthIncome).toBe(3000.56);
  });
});

describe('splitCompaniesIntoChunks', () => {
  test('should return array of array for given data', () => {
    const companies = [{}, {}, {}, {}, {}, {}];
    const splittedCompanies = splitCompaniesIntoChunks(companies, 2);

    expect(splittedCompanies.length).toBe(3);
    expect(Array.isArray(splittedCompanies[0])).toBe(true);
  });
  test('should return array with all elements if size of chunk is bigger than array.length', () => {
    const companies = [{}, {}, {}, {}, {}, {}];

    expect(splitCompaniesIntoChunks(companies, 10).length).toBe(1);
  });
  test('chunks should have correct size', () => {
    const companies = [{}, {}, {}, {}, {}, {}];

    expect(splitCompaniesIntoChunks(companies, 3)[0].length).toBe(3);
  });
});

describe('sortCompanies', () => {
  test('should sort by key of type number in ascending Order', () => {
    const companies = [
      { numberType: 2 },
      { numberType: 3.111 },
      { numberType: 1 },
      { numberType: 213 },
      { numberType: 123123123 },
      { numberType: 0.5 },
    ];
    const sortedCompanies = [
      { numberType: 0.5 },
      { numberType: 1 },
      { numberType: 2 },
      { numberType: 3.111 },
      { numberType: 213 },
      { numberType: 123123123 },
    ];

    expect(sortCompanies(companies, 'numberType', 'ASC')).toEqual(sortedCompanies);
  });
  test('should sort by key of type number in descending Order', () => {
    const companies = [
      { numberType: 2 },
      { numberType: 3.111 },
      { numberType: 1 },
      { numberType: 213 },
      { numberType: 123123123 },
      { numberType: 0.5 },
    ];
    const sortedCompanies = [
      { numberType: 123123123 },
      { numberType: 213 },
      { numberType: 3.111 },
      { numberType: 2 },
      { numberType: 1 },
      { numberType: 0.5 },
    ];
    expect(sortCompanies(companies, 'numberType', 'DESC')).toEqual(sortedCompanies);
  });
  test('should sort by key of type string in ascending Order', () => {
    const companies = [{ stringType: '2' }, { stringType: 'z' }, { stringType: 'b' }, { stringType: 'a' }];
    const sortedCompanies = [{ stringType: '2' }, { stringType: 'a' }, { stringType: 'b' }, { stringType: 'z' }];

    expect(sortCompanies(companies, 'stringType', 'ASC')).toEqual(sortedCompanies);
  });
  test('should sort by key of type string in descending Order', () => {
    const companies = [{ stringType: '2' }, { stringType: 'z' }, { stringType: 'b' }, { stringType: 'a' }];
    const sortedCompanies = [{ stringType: 'z' }, { stringType: 'b' }, { stringType: 'a' }, { stringType: '2' }];

    expect(sortCompanies(companies, 'stringType', 'DESC')).toEqual(sortedCompanies);
  });
});

describe('filterCompanies', () => {
  test('should filter by number too but after calling toFixed(2) on them', () => {
    const companies = [
      { numberType: 0.91123 },
      { numberType: 0.19113 },
      { numberType: 1 },
      { stringType: '91' },
      { numberType: 2222111191 },
    ];
    const filteredCompanies = [{ numberType: 0.91123 }, { stringType: '91' }, { numberType: 2222111191 }];

    expect(filterCompanies(companies, '91')).toEqual(filteredCompanies);
  });
  test(`should filter strings after forcing them to lower cases`, () => {
    const companies = [
      { a: 'ttt test' },
      { b: 'TEST 123123' },
      { c: 'TeSt asd' },
      { d: '9121312312' },
      { e: ':[;(:{' },
    ];
    const filteredCompanies = [{ a: 'ttt test' }, { b: 'TEST 123123' }, { c: 'TeSt asd' }];

    expect(filterCompanies(companies, 'test')).toEqual(filteredCompanies);
  });
});
