import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const OrderTotal = () => {
  const {cartTotalAmount} = useSelector(state => state.cart);

  const ORDER_SUMMARY_DETAILS = [
    {
      label: 'Subtotal',
      desc: cartTotalAmount,
    },

    {
      label: 'Shipping',
      desc: 'FREE',
    },

    {
      label: 'Total',
      desc: cartTotalAmount,
    },
  ];

  return (
    <>
      {ORDER_SUMMARY_DETAILS.map((detail, i) => {
        const isOrderTotal = detail.label === 'Total';
        const isFree = detail.desc === 'FREE';
        return (
          <TextWrapperStyled orderTotal={isOrderTotal} key={i}>
            <LabelStyled orderTotal={isOrderTotal}>{detail.label}</LabelStyled>
            <DescStyled orderTotal={isOrderTotal} free={isFree}>
              {typeof detail.desc === 'number' && 'Php '}
              {detail.desc.toLocaleString('en-US', {maximumFractionDigits:2})}
            </DescStyled>
          </TextWrapperStyled>
        );
      })}
    </>
  );
};

// const WrapperStyled = styled.section``;

const TextWrapperStyled = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: ${({ orderTotal }) => orderTotal && '1.3em'};

  > * {
    margin-block: 0.5em;
  }
`;

const LabelStyled = styled.h4(
  ({ orderTotal, theme }) => `
 
  font-weight: ${orderTotal ? theme.bold : theme.regular} 
  `
);

const DescStyled = styled.h5(
  ({ orderTotal, free, theme }) => `
  font-weight: ${orderTotal ? theme.bold : theme.regular};
  color: ${free && theme.text.accent}
  `
);

export default OrderTotal;
