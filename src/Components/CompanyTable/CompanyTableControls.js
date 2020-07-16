import React from 'react';
export default ({
  companiesOnPage,
  currentPage,
  handleCompaniesOnPageChange,
  handleCurrentPageChange,
  possiblePages,
}) => {
  const pages = Array.from({ length: possiblePages }, (x, i) => i);
  return (
    <>
      <select value={companiesOnPage} onChange={handleCompaniesOnPageChange}>
        <option value={5}>5</option>
        <option value={10}>10</option>
        <option value={15}>15</option>
      </select>
      {/* todo extract this */}
      {pages.map((pageNum) => <button key={pageNum} value={pageNum} onClick={handleCurrentPageChange}>{pageNum+1}</button>)}
    </>
  );
};
