import React from 'react';
import styled from 'styled-components';
import {Button, ButtonGroup, ButtonOutline} from '../../components/common/Button';

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
        <Button>Add To Cart</Button>
        <ButtonOutline>Continue Shopping</ButtonOutline>
      </ButtonGroup>
    </TextWrapperStyled>
  );
};

const TextWrapperStyled = styled.section`
  grid-area: desc;
  display: flex;
  flex-direction: column;
  gap: 1em;
`;

const CategoryStyled = styled.h5``;

const ProductNameStyled = styled.h1`
margin: unset;
`;

const PriceStyled = styled.h3``;
const DescriptionStyled = styled.p``;

export default Description;
