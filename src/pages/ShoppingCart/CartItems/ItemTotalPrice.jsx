import React from 'react';
import styled from 'styled-components';

const ItemTotalPrice = ({price, quantity}) => {

  const totalPrice = price * quantity;

  return (
    <WrapperStyled>
      <TotalPriceTitleStyled>Total Price</TotalPriceTitleStyled>
      <TotalAmountStyled>Php {totalPrice.toLocaleString('en-US', {maximumFractionDigits:2})}</TotalAmountStyled>
    </WrapperStyled>
  );
};

const WrapperStyled = styled.div`
width: 150px;`;

const TotalPriceTitleStyled = styled.h6(
  ({theme}) => `
  font-weight: ${theme.semiBold};
  margin-bottom: .8em`
);

const TotalAmountStyled = styled.h3(
  ({theme}) => `font-weight: ${theme.bold};

  `
)
export default ItemTotalPrice;
