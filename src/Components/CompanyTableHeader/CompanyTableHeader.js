import React from 'react';
import styled from 'styled-components';
import { BRIGHT_COLOR,MAIN_COLOR,SECONDARY_COLOR} from 'Config/Colors';
const Header = styled.thead`
  color: ${BRIGHT_COLOR};
  background-color: ${MAIN_COLOR};
`;
const Cell = styled.th`
padding:15px 10px;
border: 1px solid ${SECONDARY_COLOR};`;
export default () => (
  <Header>
    <tr>
      <Cell>Id</Cell>
      <Cell>Name</Cell>
      <Cell>City</Cell>
      <Cell>Total Income</Cell>
      <Cell>Average Income</Cell>
      <Cell>Last Month Income</Cell>
    </tr>
  </Header>
);
