import React from 'react';
import styled from 'styled-components';

const ItemQuantity = () => {
  return (
    <WrapperStyled>
      <QtyTitle>Quantity</QtyTitle>
      <div>
        <BtnCounter>-</BtnCounter>
        <QuantityCountStyled>0</QuantityCountStyled>
        <BtnCounter>+</BtnCounter>
      </div>
    </WrapperStyled>
  );
};

const WrapperStyled = styled.div``;

const QtyTitle = styled.h6`
  margin-bottom: 1.5em;
`;

const BtnCounter = styled.button`
  padding: 0.2em 0.5em;
  border-radius: 0;
  border: 1px solid gray;
  background: white;
  cursor: pointer;
`;

const QuantityCountStyled = styled.span`
  margin-inline: 0.5em;
`;

export default ItemQuantity;
