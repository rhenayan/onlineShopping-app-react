import React from 'react';
import styled from 'styled-components';
import SortByPrice from './SortByPrice';
import FilterByCategory from './FilterByCategory';

const Filters = () => {
  return (
    <FiltersWrapperStyled>
      <FilterByCategory/>
      <SortByPrice/>
    </FiltersWrapperStyled>
  );
};

const FiltersWrapperStyled = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1em;
  padding-inline:.8em;
`;

export default Filters;
