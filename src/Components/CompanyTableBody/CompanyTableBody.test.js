import React from 'react';
import { render } from '@testing-library/react';

import CompanyTableBody from './index';

test('should render with correct data', () => {
  const mockedCompanies = [
    {
      id: 132,
      name: 'testName',
      city: 'testCity',
      totalIncome: 297251.1500000001,
      avgIncome: 5945.022000000002,
      lastMonthIncome: 0.01111111,
    },
  ];
  const table = document.createElement('table');
  const { getByText } = render(<CompanyTableBody visibleCompanies={mockedCompanies} />, {
    container: document.body.appendChild(table),
  });

  const id = getByText('132');
  const name = getByText('testName');
  const city = getByText('testCity');
  const totalIncome = getByText('297251.15');
  const avgIncome = getByText('5945.02');
  const lastMonthIncome = getByText('0.01');

  expect(id).toBeInTheDocument();
  expect(name).toBeInTheDocument();
  expect(city).toBeInTheDocument();
  expect(totalIncome).toBeInTheDocument();
  expect(avgIncome).toBeInTheDocument();
  expect(lastMonthIncome).toBeInTheDocument();
});

test('should render with empty data', () => {
  const table = document.createElement('table');
  const { getByText } = render(<CompanyTableBody visibleCompanies={[]} />, {
    container: document.body.appendChild(table),
  });
  const empty = getByText('No Data Fetched');

  expect(empty).toBeInTheDocument();
});
