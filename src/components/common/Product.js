import React from 'react';
import styled from 'styled-components';
import dummyimage from '../../DUMMY_IMAGE.jpg'



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
        </ProductFooterStyled>
      </ProductInfoWrapperStyled>
    </ProductWrapperStyled>
  );
};


const ProductWrapperStyled = styled.div`
    padding-inline: 1.2em;
`
const FigureStyled = styled.figure`
  width: 100%;
  height: 190px;
  margin:unset;
  text-align:center;

`;

const ImageStyled = styled.img`
  max-width: 100%;
  height: 100%;
  object-fit: cover;
  mix-blend-mode: multiply;
`;


const ProductInfoWrapperStyled = styled.div`
  padding: 1.2em .5em;
`;

const CategoryStyled = styled.small``;

const NameStyled = styled.h3`
margin:unset;
 
`;

const ProductFooterStyled = styled.div`
  border-top: 2px solid black;
  margin-top: 0.5em;
`;

const PriceStyled = styled.h2`
 margin: unset;
`;

// const AddToCartStyled = styled.button`
//   padding: 0.5em 0.7em;
//   background-color: orange;
//   color: white;
//   border: none;
//   cursor: pointer;
//   font-size: 0.8rem;
//   transition: all 0.3s ease-in-out;

//   &:hover {
//     background-color: lightgrey;
//     outline: 1px solid black;
//     color: black;
//   }
// `;

export default Product;
