import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { removeFromCart } from '../../../features/cartSlice';
import { ButtonStyled } from '../../../styles/Button.style';
import ImageStyled from '../../../styles/Image.style';

const ItemDetail = ({ ...item }) => {
  const { image, price, title } = item;
  const dispatch = useDispatch();
  return (
    <WrapperStyled>
      <ItemImageWrapperStyled>
        <ItemImageStyled src={image} />
      </ItemImageWrapperStyled>

      <ItemDetailsStyled>
        <NameStyled>{title}</NameStyled>
        <PriceStyled>Php {price}</PriceStyled>
        <RemoveButtonStyled outline onClick={() => dispatch(removeFromCart(item))}>
          remove
        </RemoveButtonStyled>
      </ItemDetailsStyled>
    </WrapperStyled>
  );
};

const WrapperStyled = styled.div`
  display: flex;
  gap: 0.7em;
`;

const ItemImageWrapperStyled = styled.div`
  width: 50%;
height: 150px;
text-align:center;

`
const ItemImageStyled = styled(ImageStyled)`
  object-fit:contain;
`; 

const ItemDetailsStyled = styled.div`
  * {
    margin-bottom: 0.5em;
  }
  width: 50%;
`;

const NameStyled = styled.h5(({ theme }) => `font-weight: ${theme.regular}`);

const PriceStyled = styled.h4(({ theme }) => `font-weight: ${theme.regular}`);


const RemoveButtonStyled= styled(ButtonStyled)`
  font-size: .9em;
`
export default ItemDetail;
