import React from 'react';
import CompanyTableDataRow from 'Components/CompanyTableRow';

export default ({ visibleCompanies: companies }) => (
  <tbody>
    {companies && companies.length > 0 ? (
      companies.map((company) => <CompanyTableDataRow key={company.id} company={company} />)
    ) : (
      <tr>
        <td colSpan="6">No Data Fetched</td>
      </tr>
    )}
  </tbody>
);
