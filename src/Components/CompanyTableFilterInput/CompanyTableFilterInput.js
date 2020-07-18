import React from 'react';
import { Wrapper, StyledInput } from './CompanyTableFilterInputStyles';
import PropTypes from 'prop-types';
import { useDebouncedCallback } from 'use-debounce';

const CompanyTableFilterInput = ({ filter, handleFilterChange }) => {
  const [debouncedFunction] = useDebouncedCallback(
    (newFilter) => {
      handleFilterChange(newFilter);
    },
    200, //0.2sec
  );
  return (
    <Wrapper>
      <StyledInput defaultValue={filter} type="text" onChange={(event) => debouncedFunction(event.target.value)} />
    </Wrapper>
  );
};

CompanyTableFilterInput.propTypes = {
  filter: PropTypes.string.isRequired,
  handleFilterChange: PropTypes.func.isRequired,
};

export default CompanyTableFilterInput;
