import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { addToCart } from '../../features/cartSlice';
import { ButtonStyled } from '../../styles/Button.style';
import ImageStyled from '../../styles/Image.style';

const Product = ({ ...product }) => {
  const {cartItems} = useSelector(state => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddToCart = product => {
    dispatch(addToCart(product));
  };

  const isInCartToggle = id => {
    const isInCart = cartItems.some(item => item.id === id);
    return isInCart;
  };

  const { image, category, title, price, id } = product;

  return (
    <ProductWrapperStyled>
      <FigureStyled>
        <ImageStyled src={image} onClick={()=>navigate(`/product/${id}`)}/>
      </FigureStyled>
      <ProductInfoWrapperStyled>
        <CategoryStyled>{category}</CategoryStyled>
        <NameStyled>{title}</NameStyled>
        <ProductFooterStyled>
          <PriceStyled>${price}</PriceStyled>
          <ButtonStyled
            disabled={isInCartToggle(id)}
            onClick={() => handleAddToCart(product)}
          >
            {isInCartToggle(id) ? 'In Cart' : 'Buy'}
          </ButtonStyled>
        </ProductFooterStyled>
      </ProductInfoWrapperStyled>
    </ProductWrapperStyled>
  );
};

const ProductWrapperStyled = styled.div``;
const FigureStyled = styled.figure`
  width: 100%;
  height: 190px;
  text-align: center;
`;

const ProductInfoWrapperStyled = styled.div`
  padding: 1.2em 0.5em;
`;

const CategoryStyled = styled.small`
  text-transform: uppercase;
`;

const NameStyled = styled.h4`
  font-weight: ${({ theme }) => theme.semiBold};
  margin-top: 0.5em;
`;

const ProductFooterStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-block: 0.5em;
  border-top: 2px solid ${({ theme }) => theme.border};
  margin-top: 0.5em;
`;

const PriceStyled = styled.h3``;

export default Product;
