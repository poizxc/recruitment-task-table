import React from 'react';
import { Wrapper, StyledInput } from './CompanyTableFilterInputStyles';

export default ({ filter, handleFilterChange }) => {
  return (
    <Wrapper>
      <StyledInput value={filter} type="text" onChange={handleFilterChange} />
    </Wrapper>
  );
};
