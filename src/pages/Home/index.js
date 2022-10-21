import React from 'react';

import ShopOverview from './ShopOverview';

const Home = () => {
  return (
    <>
      <ShopOverview
        title={'Top Deals'}
        subtitle={'Lorem ipsum dolor sit amet.'}
      />
      <ShopOverview
        title={'New Arrivals'}
        subtitle={'Dolor sit amet consectetur adipisicing elit.'}
      />
    </>
  );
};

export default Home;
