import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { getTotals } from '../../../features/cartSlice';
import ItemDetail from './ItemDetail';
import ItemQuantity from './ItemQuantity';
import ItemTotalPrice from './ItemTotalPrice';

const CartItems = () => {
  const {cartItems} = useSelector(state => state.cart);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTotals());
  }, [cartItems, dispatch]);
  return (
    <CartItemsContainerStyled>
      {cartItems.length > 0 &&
        cartItems.map(cartItem => {
          const { price, cartQuantity, id } = cartItem;
          return (
            <ItemWrapperStyled key={id}>
              <ItemDetail {...cartItem} />
              <ItemQuantity quantity={cartQuantity} id={id} />
              <ItemTotalPrice price={price} quantity={cartQuantity} />
            </ItemWrapperStyled>
          );
        })}
    </CartItemsContainerStyled>
  );
};

const CartItemsContainerStyled = styled.article``;

const ItemWrapperStyled = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 170px;
  place-items: center;
  margin-block: 1.5em;
`;

export default CartItems;
