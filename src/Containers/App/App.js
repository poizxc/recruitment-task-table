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
const ReflectedSpan = styled.span`
  transform: scaleX(-1);
  display: inline-block;
`;
function App() {
  return (
    <>
      <AppHeader className="App-header">
        <AppTitle>
          {/* linter had problem with styled components - he was expecting html span tag not React Component*/}
          {/* eslint-disable-next-line jsx-a11y/accessible-emoji */}
          <ReflectedSpan role="img" aria-label="mouse emoji">
            🐁
          </ReflectedSpan>
          Recruitment Task - The Emoji Table
          <span role="img" aria-label="cat emoji">
            🐈
          </span>
        </AppTitle>
      </AppHeader>
      <CompanyTable />
    </>
  );
}

export default App;
