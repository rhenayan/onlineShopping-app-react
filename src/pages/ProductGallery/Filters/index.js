import React from 'react';
import styled from 'styled-components';
import SearchBar from './SearchBar';

import Tabs from './Tabs';

const Filters = () => {
  return (
    <FiltersWrapperStyled>
      <Tabs/>
      <SearchBar />
    </FiltersWrapperStyled>
  );
};

const FiltersWrapperStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1em;

  padding-inline:.8em;
`;

export default Filters;
