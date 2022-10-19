import React from 'react';

import styled from 'styled-components';
import ItemDetail from './ItemDetail';
import ItemQuantity from './ItemQuantity';
import ItemTotalPrice from './ItemTotalPrice';

const CartItems = () => {
  return (
    <CartItemsContainerStyled>
      <ItemWrapperStyled>
        <ItemDetail />
        <ItemQuantity />
        <ItemTotalPrice />
      </ItemWrapperStyled>

      <ItemWrapperStyled>
        <ItemDetail />
        <ItemQuantity />
        <ItemTotalPrice />
      </ItemWrapperStyled>

      <ItemWrapperStyled>
        <ItemDetail />
        <ItemQuantity />
        <ItemTotalPrice />
      </ItemWrapperStyled>
    </CartItemsContainerStyled>
  );
};

const CartItemsContainerStyled = styled.article`
  grid-area: item;
`;

const ItemWrapperStyled = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 170px;
  place-items: center;
  grid-column-gap: 1.5em;
`;

export default CartItems;
