import React, { useRef } from 'react';
import { Wrapper, Select } from './CompanyTableSelectPagesInputStyles';
import PropTypes from 'prop-types';
const CompanyTableSelectPagesInput = ({ companiesOnPage, handleCompaniesOnPageChange }) => {
  const select = useRef(null);
  const handleSelect = (e) => {
    select.current.blur();
    handleCompaniesOnPageChange(e);
  };
  return (
    <Wrapper>
      <Select ref={select} value={companiesOnPage} onChange={handleSelect}>
        <option value={5}>5</option>
        <option value={10}>10</option>
        <option value={15}>15</option>
        <option value={20}>20</option>
        <option value={25}>25</option>
        <option value={30}>30</option>
      </Select>
    </Wrapper>
  );
};

CompanyTableSelectPagesInput.propTypes = {
  companiesOnPage: PropTypes.number.isRequired,
  handleCompaniesOnPageChange: PropTypes.func.isRequired,
};

export default CompanyTableSelectPagesInput;
