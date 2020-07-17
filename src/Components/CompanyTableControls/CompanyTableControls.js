import React from 'react';
import styled from 'styled-components';

export default ({
  companiesOnPage,
  currentPage,
  handleCompaniesOnPageChange,
  handleCurrentPageChange,
  possiblePages,
}) => {
  const pages = Array.from({ length: possiblePages }, (x, i) => i);

  const Div = styled.div`
  padding-top:20px;
  width:100%;
  max-width:900px;
  margin:0 auto;
  `
  return (
    <Div>
      <select value={companiesOnPage} onChange={handleCompaniesOnPageChange}>
        <option value={5}>5</option>
        <option value={10}>10</option>
        <option value={15}>15</option>
      </select>
      {/* todo extract this */}
      {pages.map((pageNum) => <button key={pageNum} value={pageNum} onClick={handleCurrentPageChange}>{pageNum+1}</button>)}
    </Div>
  );
};
