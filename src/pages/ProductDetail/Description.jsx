import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { addToCart } from '../../features/cartSlice';
import { ButtonGroup, ButtonStyled } from '../../styles/Button.style';

const Description = ({ ...singleProduct }) => {
  
  const dispatch = useDispatch();
  const { category, title, price, description, id } = singleProduct;
  const { cartItems } = useSelector(state => state.cart);

  const isInCartToggle = id => {
    const isInCart = cartItems.some(item => item.id === id);
    return isInCart;
  };

  return (
    <TextWrapperStyled>
      <CategoryStyled>{category}</CategoryStyled>
      <ProductNameStyled>{title}</ProductNameStyled>
      <PriceStyled>$ {price}</PriceStyled>
      <DescriptionStyled>{description}</DescriptionStyled>
      <ButtonGroup width={'230px'}>
        <ButtonStyled
          disabled={isInCartToggle(id)}
          onClick={() => dispatch(addToCart(singleProduct))}
        >
          {isInCartToggle(id) ? 'In Cart' : 'Buy'}
        </ButtonStyled>
        <Link to='/products'>
          <ButtonStyled outline>Continue Shopping</ButtonStyled>
        </Link>
      </ButtonGroup>
    </TextWrapperStyled>
  );
};

const TextWrapperStyled = styled.section`
  grid-area: desc;
  display: flex;
  flex-direction: column;
  gap: 0.8em;
`;

const CategoryStyled = styled.small`
  text-transform: uppercase;
`;

const ProductNameStyled = styled.h3(
  ({ theme }) => `
    font-weight: ${theme.regular};
  `
);

const PriceStyled = styled.h2(
  ({ theme }) => `
    font-weight: ${theme.bold};
  `
);
const DescriptionStyled = styled.p(
  ({ theme }) => `
    font-weight: ${theme.light};
  `
);

export default Description;
