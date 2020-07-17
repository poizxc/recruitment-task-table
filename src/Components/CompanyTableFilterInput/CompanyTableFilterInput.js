import React from 'react';
import styled from 'styled-components';

//todo debug why typing is working so weird
export default ({ filter, handleFilterChange }) => {
  return <input  value={filter} type="text" onChange={handleFilterChange} />;
};
