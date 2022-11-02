import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import Product from '../../components/common/Product';
import { useGetAllProductsQuery } from '../../features/apiSlice';
import {
  getFilteredProducts,
  sortFilteredProducts,
} from '../../features/filterSlice';

const Gallery = () => {
  const { data: products } = useGetAllProductsQuery();
  const { filteredProducts, activeCategory, sortSelectedValue } = useSelector(
    state => state.filter
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFilteredProducts(products));
    dispatch(sortFilteredProducts(products));
  }, [sortSelectedValue, activeCategory]);

  return (
    <GalleryWrapper>
     
      {filteredProducts?.length > 0
        ? filteredProducts?.map(product => (
            <Product key={product.id} {...product} />
          ))
        : products?.map(product => <Product key={product.id} {...product} />)}
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
