import React from 'react';

import CompanyTable from 'Components/CompanyTable';
import { AppHeader, AppTitle, ReflectedSpan } from './AppStyles';
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
