import React from 'react';
import styled from 'styled-components';
import SectionTitle from '../../components/common/SectionTitle';
import CartItems from './CartItems';
import OrderSummary from './OrderSummary';
import EmptyCart from './EmptyCart';
import { useDispatch, useSelector } from 'react-redux';
import { ButtonStyled } from '../../styles/Button.style';
import {clearCart} from '../../features/cartSlice'

const ShoppingCart = () => {
  const {cartItems} = useSelector(state => state.cart);
  const {cartTotalQuantity} = useSelector(state => state.cart);
  const dispatch = useDispatch();
  return (
    <>
      {cartItems.length === 0 ? (
        <EmptyCart />
      ) : (
        <>
          <SectionTitle
            title={'My Shopping Cart'}
            subtitle={`${cartTotalQuantity} ${cartTotalQuantity > 1 ? 'items' : 'item'}`}
          />
          <ClearCartButtonStyled outline onClick={()=>dispatch(clearCart())}>Clear cart</ClearCartButtonStyled>
          <CartWrapperStyled>
            <CartItems />
            <OrderSummary />
          </CartWrapperStyled>
        </>
      )}
    </>
  );
};

const CartWrapperStyled = styled.section`
  display: grid;
  width: 100%;
  grid-template-columns: 2fr 320px;
`;

const ClearCartButtonStyled = styled(ButtonStyled)`
    font-size: .7em;
`

export default ShoppingCart;
