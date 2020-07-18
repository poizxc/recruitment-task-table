import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import sinon from 'sinon';
import CompanyTableFilterInput from './index';

test('should render correct', () => {
  const callback = sinon.fake();
  const { container } = render(<CompanyTableFilterInput filter="test" handleFilterChange={callback} />);
  const input = container.querySelector('input');

  expect(input.value).toBe('test');
});

test('should not call callback immediately ', () => {
  const callback = sinon.fake();
  const { container } = render(<CompanyTableFilterInput filter="test" handleFilterChange={callback} />);
  const input = container.querySelector('input');

  fireEvent.change(input, { value: '20' });
  fireEvent.change(input, { value: '30' });

  expect(callback.callCount).toBe(0);
});

