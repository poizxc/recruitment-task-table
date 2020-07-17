import React from 'react';
import CompanyTableDataRow from 'Components/CompanyTableRow';
export default ({ visibleCompanies:companies }) => (
  <tbody>
    {companies ? (
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
