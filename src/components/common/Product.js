import React from 'react';
import styled from 'styled-components';
import dummyimage from '../../DUMMY_IMAGE.jpg';
import { ButtonStyled } from '../../styles/Button.style';
import ImageStyled from '../../styles/Image.style';

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
            <ButtonStyled>Buy</ButtonStyled>
          </ProductFooterStyled>
        </ProductInfoWrapperStyled>
    </ProductWrapperStyled>
  )
};

const ProductWrapperStyled = styled.div``;
const FigureStyled = styled.figure`
  width: 100%;
  height: 190px;
  text-align: center;
`;

const ProductInfoWrapperStyled = styled.div`
  padding: 1.2em 0.5em;
`;

const CategoryStyled = styled.small``;

const NameStyled = styled.h4`
  font-weight: ${({ theme }) => theme.semiBold};
`;

const ProductFooterStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-block: 0.5em;
  border-top: 2px solid ${({ theme }) => theme.border};
  margin-top: 0.5em;
`;

const PriceStyled = styled.h3``;

export default Product;
