import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import sinon from 'sinon';
import CompanyTableHeader from './index';

test('should render correct', () => {
  const callback = sinon.fake();
  const table = document.createElement('table');
  const { getByText } = render(
    <CompanyTableHeader sorting={{ column: 'id', order: 'ASC' }} handleSortingChange={callback} />,
    {
      container: document.body.appendChild(table),
    },
  );

  const id = getByText('id');
  const name = getByText('name');
  const city = getByText('city');
  const totalIncome = getByText('total income');
  const avgIncome = getByText('average income');
  const lastMonthIncome = getByText('last month income');

  expect(id).toBeInTheDocument();
  expect(name).toBeInTheDocument();
  expect(city).toBeInTheDocument();
  expect(totalIncome).toBeInTheDocument();
  expect(avgIncome).toBeInTheDocument();
  expect(lastMonthIncome).toBeInTheDocument();
});

test('should have active and order class', () => {
  const callback = sinon.fake();
  const table = document.createElement('table');
  const { getByText } = render(
    <CompanyTableHeader sorting={{ column: 'id', order: 'ASC' }} handleSortingChange={callback} />,
    {
      container: document.body.appendChild(table),
    },
  );
  const id = getByText('id');

  expect([...id.classList].includes('active'));
  expect([...id.classList].includes('ASC'));
});

test('should call callback', () => {
  const callback = sinon.fake();
  const table = document.createElement('table');
  const { getByText } = render(
    <CompanyTableHeader sorting={{ column: 'id', order: 'ASC' }} handleSortingChange={callback} />,
    {
      container: document.body.appendChild(table),
    },
  );

  fireEvent.click(getByText('city'), { button: 1 });
  const call = callback.getCall(0);

  expect(call.firstArg).toEqual(call.lastArg);
  expect(call.firstArg).toEqual({ column: 'city' });
  expect(callback.callCount).toBe(1);
});
