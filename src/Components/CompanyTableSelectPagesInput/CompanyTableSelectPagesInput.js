import React, { useRef } from 'react';
import { Wrapper, Select } from './CompanyTableSelectPagesInputStyles';
export default ({ companiesOnPage, handleCompaniesOnPageChange }) => {
  const select = useRef(null);
  const handleSelect = (e) => {
    select.current.blur();
    handleCompaniesOnPageChange(e);
  };
  return (
    <Wrapper>
      <Select ref={select} value={companiesOnPage} onChange={handleSelect}>
        <option value={15}>15</option>
        <option value={20}>20</option>
        <option value={25}>25</option>
        <option value={30}>30</option>
      </Select>
    </Wrapper>
  );
};
