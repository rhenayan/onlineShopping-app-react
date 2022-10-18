import React from 'react';
import Filters from './Filters';
import MainBox from '../../components/common/MainBox';
import Gallery from './Gallery';

const Products = () => {
  return (
    <MainBox>
      <Filters />
      <Gallery/>
    </MainBox>
  );
};

export default Products;
