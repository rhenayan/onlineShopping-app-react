import React from 'react';
import styled from 'styled-components';
import SectionTitle from '../../components/common/SectionTitle';
import CartItems from './CartItems';
import OrderSummary from './OrderSummary';


const ShoppingCart = () => {
  return (
    <>
        <SectionTitle title={'Your Shopping Cart'} subtitle={'5 items'} />
        <CartWrapperStyled>
          <CartItems />
          <OrderSummary />
        </CartWrapperStyled>
    </>
  );
};


const CartWrapperStyled = styled.section`
  display: grid;
  width: 100%;
  grid-template-areas: 'item ordersum';
`;

export default ShoppingCart;
