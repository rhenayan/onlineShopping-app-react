import React from 'react';
import styled from 'styled-components';
import SectionTitle from '../../components/common/SectionTitle';
import CartItems from './CartItems';
import OrderSummary from './OrderSummary';
import MainBox from '../../components/common/MainBox'

const ShoppingCart = () => {
  return (
    <MainBox>
        <SectionTitle title={'Your Shopping Cart'} subtitle={'5 items'} />
        <CartWrapperStyled>
          <CartItems />
          <OrderSummary />
        </CartWrapperStyled>
    </MainBox>
  );
};


const CartWrapperStyled = styled.section`
  display: grid;
  width: 100%;
  grid-template-areas: 'item ordersum';
`;

export default ShoppingCart;
