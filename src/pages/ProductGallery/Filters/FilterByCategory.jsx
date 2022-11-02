import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { getActiveCategory } from '../../../features/filterSlice';
import { ButtonStyled } from '../../../styles/Button.style';


const FilterByCategory = () => {
  const dispatch = useDispatch();
  const {activeCategory} = useSelector(state => state.filter);

  return (
    <TabbledFilterWrapperStyled>
      <CategoryWrapperStyled>
        <ButtonStyled
          outline
          active={activeCategory === 'All'}
          onClick={() => dispatch(getActiveCategory('All'))}
        >
          All
        </ButtonStyled>
        <ButtonStyled
          outline
          active={activeCategory === "women's clothing"}
          onClick={() => dispatch(getActiveCategory("women's clothing"))}
        >
          Women
        </ButtonStyled>
        <ButtonStyled
          outline
          active={activeCategory === "men's clothing"}
          onClick={() => dispatch(getActiveCategory("men's clothing"))}
        >
          Men
        </ButtonStyled>
        <ButtonStyled
          outline
          active={activeCategory === "jewelery"}
          onClick={() => dispatch(getActiveCategory('jewelery'))}
        >
          Jewelery
        </ButtonStyled>
        <ButtonStyled
          outline
          active={activeCategory === "electronics"}
          onClick={() => dispatch(getActiveCategory('electronics'))}
        >
          Electronics
        </ButtonStyled>

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

export default FilterByCategory;
