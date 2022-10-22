import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {
  ButtonGroup,
  ButtonStyled,

} from '../../styles/Button.style';

const Description = () => {
  return (
    <TextWrapperStyled>
      <CategoryStyled>Women's Clothing</CategoryStyled>
      <ProductNameStyled>Jacket</ProductNameStyled>
      <PriceStyled>$ 299.85</PriceStyled>
      <DescriptionStyled>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
        molestias dolores voluptatem delectus aliquid quas! Labore quas aliquam
        rerum magnam.
      </DescriptionStyled>
      <ButtonGroup width={'230px'}>
        <ButtonStyled>Add To Cart</ButtonStyled>
        <Link to='/products'>
          <ButtonStyled outline >Continue Shopping</ButtonStyled>
        </Link>
      </ButtonGroup>
    </TextWrapperStyled>
  );
};

const TextWrapperStyled = styled.section`
  grid-area: desc;
  display: flex;
  flex-direction: column;
  gap: .8em;
`;

const CategoryStyled = styled.small``;

const ProductNameStyled = styled.h3(
  ({theme}) => `
    font-weight: ${theme.regular};
  `
);

const PriceStyled = styled.h2(
  ({theme}) => `
    font-weight: ${theme.bold};
  `
);
const DescriptionStyled = styled.p(
  ({theme}) => `
    font-weight: ${theme.light};
  `
);;

export default Description;
