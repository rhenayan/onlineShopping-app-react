import CountdownTimer from './CountdownTimer';
import Header from './Header';
import Newsletter from './Newsletter';
import Services from './Services';
import Features from './TopDeals';

const Home = () => {
  return (
    <>
      <Header/>
      <Services/>
      <Features title={'Top Deals'} subtitle={'Lorem ipsum dolor sit amet.'}/>
      <CountdownTimer/>
      <Newsletter/>
    </>
  );
};

export default Home;
