import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import sinon from 'sinon';
import CompanyTablePagesInput from './index';

test('render with proper value', () => {
  render(<CompanyTablePagesInput companiesOnPage={5} handleCompaniesOnPageChange={() => {}} />);
  const SelectElem = document.querySelector(`select`);
  expect(SelectElem.value).toBe('5');
});

test('triggers callback after change', () => {
  var callback = sinon.fake();
  render(<CompanyTablePagesInput companiesOnPage={5} handleCompaniesOnPageChange={callback} />);
  const SelectElem = document.querySelector(`select`);

  fireEvent.change(SelectElem, { value: '20' });

  expect(callback.callCount).toBe(1);
});

test('it is possible to change value many times', () => {
  var callback = sinon.fake();
  render(<CompanyTablePagesInput companiesOnPage={5} handleCompaniesOnPageChange={callback} />);
  const SelectElem = document.querySelector(`select`);

  fireEvent.change(SelectElem, { value: '20' });
  fireEvent.change(SelectElem, { value: '30' });

  expect(callback.callCount).toBe(2);
});