import React from 'react';
import { render } from '@testing-library/react';

import CompanyTableRow from './index';

test('render with correct data', () => {
  const mockedCompany = {
    id: 132,
    name: 'testName',
    city: 'testCity',
    totalIncome: 297251.1500000001,
    avgIncome: 5945.022000000002,
    lastMonthIncome: 0.01111111,
  };
  const tableBody = document.createElement('tbody');
  const table = document.createElement('table').appendChild(tableBody);
  const { getByText } = render(<CompanyTableRow company={mockedCompany} />, {
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
