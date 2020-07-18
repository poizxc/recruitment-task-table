import React from 'react';
import styled from 'styled-components';
import { SECONDARY_COLOR } from 'Config/Colors';
const PageNumber = styled.div`
display:inline-block;
padding:6px;
min-width:35px:
min-height:35px;
border:solid 2px transparent;
border-bottom:solid 2px ${SECONDARY_COLOR};
cursor:pointer;
&:hover{
  background-color:${SECONDARY_COLOR};
  border:solid 2px ${SECONDARY_COLOR};
}
`;
export default ({ pages, currentPage, handleCurrentPageChange }) => (
  <div>
    {pages.map((pageNumber) => (
      <PageNumber
        className={currentPage === pageNumber ? 'active' : undefined}
        key={pageNumber}
        onClick={() => handleCurrentPageChange(pageNumber)}
      >
        {pageNumber + 1}
      </PageNumber>
    ))}
  </div>
);
