import React from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { useGetSingleProductQuery } from '../../features/apiSlice';
import Description from './Description';
import Image from './Image';

const ProductDetail = () => {
  const { id } = useParams();

  const { data: singleProduct } = useGetSingleProductQuery(id);
  
  return (
    <ContainerStyled>
      <Image image = {singleProduct?.image}/>
      <Description {...singleProduct} />
    </ContainerStyled>
  );
};

const ContainerStyled = styled.section`
  display: grid;

  grid-template-columns: minmax(300px, 400px) 2fr;
  grid-template-rows: 1fr;
  gap: 0px 1em;
  grid-template-areas: 'image desc';
  align-items: center;
  width: 100%;
`;
export default ProductDetail;
