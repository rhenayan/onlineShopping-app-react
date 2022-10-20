import React from 'react';
import styled from 'styled-components';
import Description from './Description';
import Image from './Image';

const ProductDetail = () => {
  return (
    <ContainerStyled>
      <Image />
      <Description />
    </ContainerStyled>
  );
};

const ContainerStyled = styled.section`
  display: grid;


  grid-template-columns:minmax(300px, 400px) 2fr;
  grid-template-rows: 1fr;
  gap: 0px 1em;
  grid-template-areas: 'image desc';
  align-items: center;
  width: 100%;
`;
export default ProductDetail;
