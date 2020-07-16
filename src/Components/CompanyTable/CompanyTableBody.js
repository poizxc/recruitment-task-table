import React from 'react';
import CompanyTableDataRow from './CompanyTableDataRow';
export default ({ companies }) => (
  <tbody>
    {companies.length ? (
      companies
        .sort((company, prevCompany) => company.baseInfo.id - prevCompany.baseInfo.id)
        .map(({ baseInfo, incomes }) => <CompanyTableDataRow key={baseInfo.id} baseInfo={baseInfo} incomes={incomes} />)
    ) : (
      <tr>
        <td colSpan="6"> No Data Fetched</td>
      </tr>
    )}
  </tbody>
);
