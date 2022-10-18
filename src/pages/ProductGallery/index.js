import React from 'react';
import MainBox from '../../components/common/MainBox';
import Filters from './Filters';

import Gallery from './Gallery';

const Products = () => {
  return (
    <MainBox>
      <Filters/>
      <Gallery/>
    </MainBox>
  );
};

export default Products;
