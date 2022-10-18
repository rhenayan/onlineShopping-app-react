import React from 'react';
import styled from 'styled-components';

const MainBox = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

const Wrapper = styled.main`
  max-width: 1050px;
  margin: 0 auto;

`;
export default MainBox;
