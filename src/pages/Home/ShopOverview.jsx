import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ButtonStyled } from '../../styles/Button.style';
import Product from '../../components/common/Product';
import SectionTitle from '../../components/common/SectionTitle';

const ShopOverview = ({ title, subtitle }) => {
  return (
    <SectionStyled>
      <SectionTitle title={title} subtitle={subtitle} />
      <CardsContainerStyled>
        <Product />
        <Product />
        <Product />
      </CardsContainerStyled>

      <Link to='/products'>
        <ButtonStyled outline large>
          Shop Now
        </ButtonStyled>
      </Link>
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
  margin-block: 2.3em;
`;

export default ShopOverview;
