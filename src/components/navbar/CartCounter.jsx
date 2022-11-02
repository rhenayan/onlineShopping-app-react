import React, { useEffect } from 'react';
import { GiShoppingCart } from 'react-icons/gi';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { getTotals } from '../../features/cartSlice';

const CartCounter = () => {
  const { cartItems, cartTotalQuantity } = useSelector(state => state.cart);
  const dispatch = useDispatch();

  // to update the cart counter in the navbar whenever an item gets added to the cart and the item quantity gets updated in shoppingcart page

  useEffect(() => {
    dispatch(getTotals());
  }, [cartItems, dispatch]);

  return (
    <LinkWrapperStyled to='/shoppingcart'>
      <CartIconStyled />
      <CartCounterStyled>{cartTotalQuantity}</CartCounterStyled>
    </LinkWrapperStyled>
  );
};

const CartIconStyled = styled(GiShoppingCart)`
  color: ${({ theme }) => theme.text.light};
  font-size: 1.5rem;
  cursor: pointer;
`;

const CartCounterStyled = styled.span`
  width: 25px;
  height: 25px;
  font-size: 0.8rem;
`;

const LinkWrapperStyled = styled(Link)`
  display: flex;
`;

export default CartCounter;
