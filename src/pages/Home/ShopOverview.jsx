import React from 'react';
import styled from 'styled-components';
import Product from '../../components/common/Product';
import SectionTitle from '../../components/common/SectionTitle';

const ShopOverview = ({ title, subtitle }) => {
  return (
    <SectionStyled>
      <SectionTitle title={title} subtitle={subtitle} />


      <CardsContainerStyled>
        <Product/>
        <Product/>
        <Product/>


      </CardsContainerStyled>

    </SectionStyled>
  );
};

/**STYLING */

const SectionStyled = styled.section`
  width: 100%;
  margin: auto;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(2, auto);
  justify-items: center;
  padding-block: 4em;

`;

const CardsContainerStyled = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 1.2em;
  margin-top: 2.3em;

`;

// const ProductWrapperStyled = styled.div`
//   width: 337px;
//   margin-bottom: 4em;
//   cursor: pointer;
// `;

export default ShopOverview;
