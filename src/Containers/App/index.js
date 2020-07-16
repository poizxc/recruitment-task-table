import React from 'react';
import CompanyTable from 'Components/CompanyTable';
import { Normalize } from 'styled-normalize';
import { createGlobalStyle } from 'styled-components'
import { MAIN_FONT_COLOR } from 'Config/Colors'

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Notable&display=swap');
  body {
    font-family: 'Notable', sans-serif;
    color: ${MAIN_FONT_COLOR};
  }
`
function App() {
  return (
    <>
      <GlobalStyles/>
      <Normalize/>
        <header className="App-header">
          <p>Recruitment task - Table</p>
        </header>
        <CompanyTable />
    </>
  );
}

export default App;
