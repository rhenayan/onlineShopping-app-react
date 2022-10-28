import React from 'react';
import styled from 'styled-components';
import Product from '../../components/common/Product';
import { useGetAllProductsQuery } from '../../features/apiSlice';

const Gallery = () => {
  const { data: allProducts } = useGetAllProductsQuery();



  return (
    <GalleryWrapper>
      {allProducts?.map(product => (
          <Product key={product.id} products={{ ...product }} />
        ))}

    </GalleryWrapper>
  );
};

const GalleryWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 3em;
  margin-top: 3em;
`;

export default Gallery;
