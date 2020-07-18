import React from 'react';
import { Wrapper, StyledInput } from './CompanyTableFilterInputStyles';
import PropTypes from 'prop-types';

const CompanyTableFilterInput = ({ filter, handleFilterChange }) => {
  return (
    <Wrapper>
      <StyledInput value={filter} type="text" onChange={handleFilterChange} />
    </Wrapper>
  );
};

CompanyTableFilterInput.propTypes = {
  filter: PropTypes.string.isRequired,
  handleFilterChange: PropTypes.func.isRequired,
};

export default CompanyTableFilterInput;
