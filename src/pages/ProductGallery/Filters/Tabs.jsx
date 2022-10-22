import React from 'react';
import styled from 'styled-components';
import { ButtonStyled } from '../../../styles/Button.style';
import Dropdown from './Dropdown';

const categories = ['All', 'Women', 'Men', 'Jewelry', 'Electronics'];

const Tabs = () => {
  return (
    <TabbledFilterWrapperStyled>
      <Dropdown categories={[...categories]} />
      <CategoryWrapperStyled>
        {categories.map((cat, index) => (
          <ButtonStyled outline key={index}>
            {cat}
          </ButtonStyled>
        ))}
      </CategoryWrapperStyled>
    </TabbledFilterWrapperStyled>
  );
};

const TabbledFilterWrapperStyled = styled.div`
  width: 28%;

  @media (min-width: 469px) {
    width: 50%;
  }
`;

const CategoryWrapperStyled = styled.div`
  display: none;

  @media (min-width: 469px) {
    display: flex;
    flex-wrap: wrap;
    gap: 0.4em;
  }
`;

export default Tabs;
