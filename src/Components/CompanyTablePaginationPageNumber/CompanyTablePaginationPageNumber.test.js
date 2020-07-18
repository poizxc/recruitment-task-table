import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import sinon from 'sinon';
import CompanyTablePaginationPageNumber from './index';

test('render correctly', () => {
  const { getByText } = render(
    <CompanyTablePaginationPageNumber pageNumber={1} currentPage={1} handleCurrentPageChange={() => {}} />,
  );
  const PageNumberElement = getByText('2');

  expect(PageNumberElement).toBeInTheDocument();
});

test('have active class', () => {
  const { getByText } = render(
    <CompanyTablePaginationPageNumber pageNumber={1} currentPage={1} handleCurrentPageChange={() => {}} />,
  );
  const PageNumberElement = getByText('2');

  expect([...PageNumberElement.classList].includes('active')).toBeTruthy();
});

test(`don't have active class`, () => {
  const { getByText } = render(
    <CompanyTablePaginationPageNumber pageNumber={1} currentPage={22} handleCurrentPageChange={() => {}} />,
  );
  const PageNumberElement = getByText('2');

  expect([...PageNumberElement.classList].includes('active')).toBeFalsy();
});

test('should trigger callback', () => {
  const callback = sinon.fake();
  const { getByText } = render(
    <CompanyTablePaginationPageNumber pageNumber={1} currentPage={22} handleCurrentPageChange={callback} />,
  );
  const PageNumberElement = getByText('2');

  fireEvent.click(PageNumberElement, { button: 1 });

  expect(callback.callCount).toBe(1);
});
