import React from 'react';
import styled from 'styled-components';
import GooglePay from '../../../assets/icons/google-pay.png'
import Jcb from '../../../assets/icons/jcb.png'
import Paypal from '../../../assets/icons/paypal.png'
import Visa from '../../../assets/icons/visa.png'

const PAYMENT_METHODS = [GooglePay, Jcb, Paypal, Visa];
const PaymentMethods = () => {
  return <WrapperStyled>
    {PAYMENT_METHODS.map((payment, i) => <PaymentIcon src={payment} key={i}/>)}
  </WrapperStyled>;
};

const WrapperStyled = styled.div`
  display:flex;
  justify-content:center;
  gap: .2em;
  margin-top: .5em;

`;

const PaymentIcon = styled.img`
background: white;
padding-inline: .2em;
border-radius: 4px;
`
export default PaymentMethods;
