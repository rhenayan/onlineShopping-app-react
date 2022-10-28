import React from 'react';
import ImageStyled from '../../../styles/Image.style';
import noItem from '../../../assets/empty-cart.png';
import { ButtonStyled } from '../../../styles/Button.style';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const EmptyCart = () => {
  return (
    <EmptyCartWrapperStyled>
      <ImageStyled src={noItem} />
      <h1>
        Your cart is  currently empty.
      </h1>
      <Link to='/products'>
        <EmptyCartButtonStyled>Start Shopping</EmptyCartButtonStyled>
      </Link>
    </EmptyCartWrapperStyled>
  );
};

const EmptyCartWrapperStyled = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-block: 3em;

  h1 {
    text-align: center;
    margin: unset;
  }
`;

const EmptyCartButtonStyled = styled(ButtonStyled)`
  padding: 1em 2em;
  margin-block: 1.5em;
  font-size: 1.1rem;
`;
export default EmptyCart;
