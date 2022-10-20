import React from 'react';
import styled from 'styled-components';

const ItemTotalPrice = () => {
  return (
    <WrapperStyled>
      <TotalPriceTitleStyled>Total Price</TotalPriceTitleStyled>
      <TotalAmountStyled>$ 1500.98</TotalAmountStyled>
    </WrapperStyled>
  );
};

const WrapperStyled = styled.div``;

const TotalPriceTitleStyled = styled.h6`
  margin-bottom: 1.5em;
`;

const TotalAmountStyled = styled.h3`
  font-weight: 800;
`;
export default ItemTotalPrice;