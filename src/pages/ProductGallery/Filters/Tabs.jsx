import React from 'react';
import styled from 'styled-components';
import { ButtonOutline } from '../../../components/common/Button';

const CATEGORY = ['All', 'Women', 'Men', 'Jewelry', 'Electronics'];

const Tabs = () => {
  return (
    <TabbledFilterWrapperStyled>
      <CategoryWrapperStyled>
        {CATEGORY.map((cat, index) => (
          <ButtonOutline key={index}>{cat}</ButtonOutline>
        ))}
      </CategoryWrapperStyled>
    </TabbledFilterWrapperStyled>
  );
};

const TabbledFilterWrapperStyled = styled.div`
  width: 50%;

  @media (max-width: 468px) {
    width: 10%;
    position: relative;
  }
`;
const CategoryWrapperStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.4em;
`;

export default Tabs;
