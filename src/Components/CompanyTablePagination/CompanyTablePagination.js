import React from 'react';
import styled from 'styled-components';

export default ({ pages, currentPage, handleCurrentPageChange }) => {
  return pages.map((pageNum) => (
    <button active={currentPage === pageNum} key={pageNum} value={pageNum} onClick={handleCurrentPageChange}>
      {pageNum + 1}
    </button>
  ));
};
