import React from 'react';
import styled from 'styled-components';
import { ButtonStyled } from '../../../styles/Button.style';

const ItemQuantity = () => {
  return (
    <WrapperStyled>
      <QtyTitle>Quantity</QtyTitle>
      <div>
        <ButtonStyled outline>-</ButtonStyled>
        <QuantityCountStyled>0</QuantityCountStyled>
        <ButtonStyled outline>+</ButtonStyled>
      </div>
    </WrapperStyled>
  );
};

const WrapperStyled = styled.div``;

const QtyTitle = styled.h6(
  ({ theme }) => `
  font-weight: ${theme.semiBold}; 
  margin-bottom: 1.5em;
  `
);


const QuantityCountStyled = styled.span`
  margin-inline: 0.5em;
`;

export default ItemQuantity;
