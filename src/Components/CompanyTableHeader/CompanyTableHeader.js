import React from 'react';
import { COLUMNS } from 'Config/Constants';
import { Header, Cell } from './CompanyTableHeaderStyles';

export default ({ sorting, handleSortingChange }) => (
  <Header>
    <tr>
      {Object.keys(COLUMNS).map((key) => (
        <Cell
          key={key}
          className={key === sorting.column && `active ${sorting.order.toLowerCase()}`}
          onClick={() => handleSortingChange({ column: key })}
        >
          {COLUMNS[key]}
        </Cell>
      ))}
    </tr>
  </Header>
);
