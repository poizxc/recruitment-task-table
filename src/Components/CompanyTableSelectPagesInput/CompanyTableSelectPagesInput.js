import React from 'react';
import styled from 'styled-components';

export default ({ companiesOnPage, handleCompaniesOnPageChange }) => {
  return (
    <select value={companiesOnPage} onChange={handleCompaniesOnPageChange}>
      <option value={10}>10</option>
      <option value={15}>15</option>
      <option value={20}>20</option>
    </select>
  );
};
