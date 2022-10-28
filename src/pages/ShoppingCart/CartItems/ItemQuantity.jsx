import React from 'react';
import styled from 'styled-components';
import { ButtonStyled } from '../../../styles/Button.style';
import { useDispatch } from 'react-redux';
import {
  increaseQuantity,
  decreaseQuantity,
} from '../../../features/cartSlice';

const ItemQuantity = ({ quantity, id }) => {
  const dispatch = useDispatch();

  return (
    <WrapperStyled>
      <QtyTitle>Quantity</QtyTitle>
      <CounterWrapperStyled>
        <ButtonStyled outline onClick={() => dispatch(decreaseQuantity(id))}>
          -
        </ButtonStyled>
        <QuantityCountStyled>{quantity}</QuantityCountStyled>
        <ButtonStyled outline onClick={() => dispatch(increaseQuantity(id))}>
          +
        </ButtonStyled>
      </CounterWrapperStyled>
    </WrapperStyled>
  );
};

const WrapperStyled = styled.div`
  padding-left: 5em;
`;

const CounterWrapperStyled = styled.div`
  width: 150px;
  margin-top: .4em;
`

const QtyTitle = styled.h6(
  ({ theme }) => `
  font-weight: ${theme.semiBold}; 
  
  `
);

const QuantityCountStyled = styled.span`
  margin-inline: 0.5em;
  display: inline-block;
  width: 20px;
  text-align:center;
`;

export default ItemQuantity;
