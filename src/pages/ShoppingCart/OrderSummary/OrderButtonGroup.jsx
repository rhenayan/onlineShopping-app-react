import React from 'react';
import { Link } from 'react-router-dom';
import {
  ButtonGroup,
  ButtonPrimary,
  ButtonSecondary,
} from '../../../components/common/Button';

const OrderButtonGroup = () => {
  return (
    <ButtonGroup>
      <Link to='/'>
        <ButtonPrimary>Checkout</ButtonPrimary>
      </Link>
      <Link to='/products'>
        <ButtonSecondary>Continue Shopping</ButtonSecondary>
      </Link>
    </ButtonGroup>
  );
};

export default OrderButtonGroup;
