import React from 'react';
import styled from 'styled-components';
import { ButtonOutline } from '../../../components/common/Button';
import Dropdown from './Dropdown';

const categories = ['All', 'Women', 'Men', 'Jewelry', 'Electronics'];

const Tabs = () => {
  return (
    <TabbledFilterWrapperStyled>
      <Dropdown categories={[...categories]}/>
      <CategoryWrapperStyled>
        {categories.map((cat, index) => (
          <ButtonOutline key={index}>{cat}</ButtonOutline>
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

  display:none;

  @media(min-width: 469px) {
    display: flex;
  flex-wrap: wrap;
  gap: 0.4em;
  }
  
`;

export default Tabs;
