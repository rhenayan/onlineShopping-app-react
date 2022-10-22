import React from 'react';
import styled from 'styled-components';

const ORDER_SUMMARY_DETAILS = [
  {
    label: 'Subtotal',
    desc: 1700.87,
  },

  {
    label: 'Shipping',
    desc: 'FREE',
  },

  {
    label: 'Order Total',
    desc: 5700.87,
  },
];

const OrderTotal = () => {
  return (
    <>
      {ORDER_SUMMARY_DETAILS.map((detail, i) => {
        const isOrderTotal = detail.label === 'Order Total';
        const isFree = detail.desc === 'FREE';
        return (
          <TextWrapperStyled orderTotal={isOrderTotal} key={i}>
            <LabelStyled orderTotal={isOrderTotal}>{detail.label}</LabelStyled>
            <DescStyled orderTotal={isOrderTotal} free={isFree}>
              {typeof detail.desc === 'number' && '$'}
              {detail.desc}
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
