import React from 'react';
import { render } from '@testing-library/react';

import sinon from 'sinon';
import CompanyTablePagination from './index';

test('should contain 5 first elements', () => {
  const callback = sinon.fake();
  const pages = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
  const { getByText, container } = render(
    <CompanyTablePagination pages={pages} currentPage={0} handleCurrentPageChange={callback} />,
  );
  const firstElem = getByText('1')

  expect(firstElem).toBeInTheDocument();
  expect(container.querySelectorAll('div>div>div>div').length).toBe(5);
});

test('should contain 5 last elements', () => {
    const callback = sinon.fake();
    const pages = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
    const { getByText, container } = render(
      <CompanyTablePagination pages={pages} currentPage={20} handleCurrentPageChange={callback} />,
    );
    const lastElem = getByText('21')

    expect(lastElem).toBeInTheDocument();
    expect(container.querySelectorAll('div>div>div>div').length).toBe(5);
  });

  test('should contain 9 elements', () => {
    const callback = sinon.fake();
    const pages = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
    const { container } = render(
      <CompanyTablePagination pages={pages} currentPage={10} handleCurrentPageChange={callback} />,
    );

    expect(container.querySelectorAll('div>div>div>div').length).toBe(9);
  });
