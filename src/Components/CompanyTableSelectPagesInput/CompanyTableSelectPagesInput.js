import React, { useRef } from 'react';
import styled from 'styled-components';
import { SECONDARY_COLOR } from 'Config/Colors';

const Select = styled.select`
  width: 100%;
  font-size: 16px;
  height: 100%;
  appearance: none;
  padding-left: 10px;
  border: 0px;
  cursor: pointer;
  border-bottom: solid 2px ${SECONDARY_COLOR};
  &:focus {
    outline: none;
    border-color: ${SECONDARY_COLOR};
    border: solid 2px ${SECONDARY_COLOR};
    border-radius: 2px;
  }
`;
const Option = styled.option``;
const Wrapper = styled.div`
  position: relative;
  width: 70px;
  height: 35px;
  &:after {
    display: block;
    position: absolute;
    content: '⬇️';
    right: 6px;
    top: 9px;
    pointer-events: none;
  }
`;
export default ({ companiesOnPage, handleCompaniesOnPageChange }) => {
  const select = useRef(null);
  const handleSelect = (e) => {
    select.current.blur();
    handleCompaniesOnPageChange(e);
  };
  return (
    <Wrapper>
      <Select ref={select} value={companiesOnPage} onChange={handleSelect}>
        <Option value={15}>15</Option>
        <Option value={20}>20</Option>
        <Option value={25}>25</Option>
        <Option value={30}>30</Option>
      </Select>
    </Wrapper>
  );
};
