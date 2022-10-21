import React from 'react';
import styled from 'styled-components';
import dummyimage from '../../DUMMY_IMAGE.jpg';
import { ButtonPrimary } from './Button';

const Product = () => {
  return (
    <ProductWrapperStyled>
      <FigureStyled>
        <ImageStyled src={dummyimage} />
      </FigureStyled>

      <ProductInfoWrapperStyled>
        <CategoryStyled>Women's Clothing</CategoryStyled>
        <NameStyled>Jacket</NameStyled>
        <ProductFooterStyled>
          <PriceStyled>$230.99</PriceStyled>
          <ButtonPrimary>Add to Cart</ButtonPrimary>
        </ProductFooterStyled>
      </ProductInfoWrapperStyled>
    </ProductWrapperStyled>
  );
};

const ProductWrapperStyled = styled.div``;
const FigureStyled = styled.figure`
  width: 100%;
  height: 190px;
  text-align: center;
`;

const ImageStyled = styled.img`
  max-width: 100%;
  height: 100%;
  object-fit: cover;
  mix-blend-mode: multiply;
`;

const ProductInfoWrapperStyled = styled.div`
  padding: 1.2em 0.5em;
`;

const CategoryStyled = styled.small``;

const NameStyled = styled.h4`
`;

const ProductFooterStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-block: 0.5em;
  border-top: 2px solid black;
  margin-top: 0.5em;
`;

const PriceStyled = styled.h3`
`;

export default Product;
