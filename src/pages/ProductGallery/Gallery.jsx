import React from 'react';
import styled from 'styled-components';
import Product from '../../components/common/Product';

const Gallery = () => {
  return (
    <GalleryWrapper>
         <Product />
         <Product />
         <Product />
         <Product />
         <Product />
         <Product />
         <Product />
         <Product />
         <Product />
         <Product />
         <Product />
         <Product />
         <Product />
         <Product />
         <Product />
         <Product />
         <Product />
         <Product />
         
     
    </GalleryWrapper>
  );
};

const GalleryWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 2em;
  margin-top: 3em;
`;


export default Gallery;
