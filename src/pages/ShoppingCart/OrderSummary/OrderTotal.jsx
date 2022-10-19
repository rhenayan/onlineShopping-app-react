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
        return (
          <TextWrapperStyled key={i}>
            <LabelStyled orderTotal={isOrderTotal}>{detail.label}</LabelStyled>
            <DescStyled orderTotal={isOrderTotal}>
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

  > * {
    margin-block: .5em;
  }
  
`;

const LabelStyled = styled.h4`
  font-size: ${props => props.orderTotal && '1.2em'};
  font-weight: ${props => props.orderTotal && '800'};

`;

const DescStyled = styled.p`
  font-weight: ${props => (props.orderTotal ? '800' : '400')};
  font-size: ${props => props.orderTotal && '1.2em'};

`;
export default OrderTotal;
