import React from 'react';
import { render } from '@testing-library/react';
import App from './index';
import UseCompanyData from 'Hooks/UseCompanyData';
jest.mock('Hooks/UseCompanyData');
test('should have emojis', () => {
  UseCompanyData.mockReturnValue({
    sorting: { column: 'id', order: 'ASC' },
    setSorting: () => {},
    setCompaniesOnPage: () => {},
    companiesOnPage: 1,
    activeCompanies: [[], []],
    setActiveCompanies: () => {},
    currentPage: 1,
    setCurrentPage: () => {},
    setFilter: () => {},
    filter: '',
    isLoading: false,
    companies: [{}, {}, {}],
  });
  const { getByText } = render(<App />);
  const mouse = getByText('🐁');
  const cat = getByText('🐈');
  expect(mouse).toBeInTheDocument();
  expect(cat).toBeInTheDocument();
  UseCompanyData.mockRestore();
});

test('should have Header text', () => {
  UseCompanyData.mockReturnValue({
    sorting: { column: 'id', order: 'ASC' },
    setSorting: () => {},
    setCompaniesOnPage: () => {},
    companiesOnPage: 1,
    activeCompanies: [[], []],
    setActiveCompanies: () => {},
    currentPage: 1,
    setCurrentPage: () => {},
    setFilter: () => {},
    filter: '',
    isLoading: false,
    companies: [{}, {}, {}],
  });
  const { getByText } = render(<App />);
  const header = getByText('Recruitment Task - The Emoji Table');
  expect(header).toBeInTheDocument();
  UseCompanyData.mockRestore();
});
