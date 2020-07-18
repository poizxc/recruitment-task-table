import React from 'react';
import CompanyTableFilterInput from 'Components/CompanyTableFilterInput';
import CompanyTableSelectPagesInput from 'Components/CompanyTableSelectPagesInput';
import CompanyTablePagination from 'Components/CompanyTablePagination';
import { Wrapper } from './CompanyTableControlsStyles';
import PropTypes from 'prop-types';

const CompanyTableControls = ({
  companiesOnPage,
  currentPage,
  handleCompaniesOnPageChange,
  handleCurrentPageChange,
  possiblePages,
  filter,
  handleFilterChange,
}) => {
  const pages = Array.from({ length: possiblePages }, (x, i) => i);
  return (
    <Wrapper>
      <CompanyTableSelectPagesInput
        companiesOnPage={companiesOnPage}
        handleCompaniesOnPageChange={handleCompaniesOnPageChange}
      />
      <CompanyTablePagination
        pages={pages}
        currentPage={currentPage}
        handleCurrentPageChange={handleCurrentPageChange}
      />
      <CompanyTableFilterInput filter={filter} handleFilterChange={handleFilterChange} />
    </Wrapper>
  );
};

CompanyTableControls.propTypes = {
  companiesOnPage: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  handleCompaniesOnPageChange: PropTypes.func.isRequired,
  handleCurrentPageChange: PropTypes.func.isRequired,
  possiblePages: PropTypes.number.isRequired,
  filter: PropTypes.string.isRequired,
  handleFilterChange: PropTypes.func.isRequired,
};

export default CompanyTableControls;
