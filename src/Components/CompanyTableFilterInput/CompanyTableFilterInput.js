import React from 'react';
import styled from 'styled-components';
import { SECONDARY_COLOR } from 'Config/Colors';
const Wrapper = styled.div`
  position: relative;
  width: 210px;
  height: 35px;
  &:after {
    display: block;
    position: absolute;
    content: ' 🔎';
    right: 6px;
    top: 9px;
    pointer-events: none;
  }
`;
const StyledInput = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  border-bottom: solid 2px ${SECONDARY_COLOR};
  border-radius: 2px;
  &:focus {
    outline: none;
    border: solid 2px ${SECONDARY_COLOR};
  }
`;
export default ({ filter, handleFilterChange }) => {
  return (
    <Wrapper>
      <StyledInput value={filter} type="text" onChange={handleFilterChange} />
    </Wrapper>
  );
};
