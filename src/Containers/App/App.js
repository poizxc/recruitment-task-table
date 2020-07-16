import React from 'react';

import CompanyTable from 'Components/CompanyTable';
import styled from 'styled-components';
import { SECONDARY_COLOR } from 'Config/Colors';
const AppHeader = styled.header`
  border-bottom: 2px solid ${SECONDARY_COLOR};
  margin-bottom: 20px;
`;
const AppTitle = styled.h1`
  text-align: center;
`;
function App() {
  return (
    <>
      <AppHeader className="App-header">
        <AppTitle>
          Recruitment Task - The Table
          <span role="img" aria-label="just an emoji :)">
            🐱
          </span>
        </AppTitle>
      </AppHeader>
      <CompanyTable />
    </>
  );
}

export default App;
