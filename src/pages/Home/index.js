import React from 'react';
import MainBox from '../../components/common/MainBox';
import ShopOverview from './ShopOverview';

const Home = () => {
  return (
    <MainBox>
      <ShopOverview
        title={'Top Deals'}
        subtitle={'Lorem ipsum dolor sit amet.'}
      />
      <ShopOverview
        title={'New Arrivals'}
        subtitle={'Dolor sit amet consectetur adipisicing elit.'}
      />
    </MainBox>
  );
};

export default Home;
