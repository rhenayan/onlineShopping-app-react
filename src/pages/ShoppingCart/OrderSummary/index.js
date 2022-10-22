import React from 'react';
import styled, { ThemeConsumer } from 'styled-components';
import PaymentMethod from './PaymentMethods'
import OrderButtonGroup from './OrderButtonGroup'
import OrderTotal from './OrderTotal'

const OrderSummary = () => {
  return (
    <WrapperStyled>
      <HeadingStyled>ORDER SUMMARY</HeadingStyled>
      <OrderTotal />
      <OrderButtonGroup />
      <PaymentMethod />
    </WrapperStyled>
  );
};

const WrapperStyled = styled.article`
  grid-area: ordersum;
  height: 500px;
  padding: .5em;

`;

const HeadingStyled = styled.h3`
font-weight: ${({theme}) => theme.bold};
padding-block: 1em;
letter-spacing: .8px;

`;

export default OrderSummary;
