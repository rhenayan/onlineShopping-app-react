import React from 'react';
import { Link } from 'react-router-dom';
import {
  ButtonGroup,
  ButtonStyled,
} from '../../../styles/Button.style';

const OrderButtonGroup = () => {
  return (
    <ButtonGroup>
      <Link to='/'>
        <ButtonStyled>Checkout</ButtonStyled>
      </Link>
      <Link to='/products'>
        <ButtonStyled outline>Continue Shopping</ButtonStyled>
      </Link>
    </ButtonGroup>
  );
};

export default OrderButtonGroup;
