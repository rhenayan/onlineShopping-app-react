import React from 'react';
import styled from 'styled-components';
import { ButtonStyled } from '../../../styles/Button.style';
import dummyimage from '../../../DUMMY_IMAGE.jpg';
import ImageStyled from '../../../styles/Image.style';

const ItemDetail = () => {
  return (
    <WrapperStyled>
      <ItemImageStyled src={dummyimage} />
      <ItemDetailsStyled>
        <NameStyled>Jacket</NameStyled>
        <PriceStyled>$299.50</PriceStyled>
        <ButtonStyled outline> remove </ButtonStyled>
      </ItemDetailsStyled>
    </WrapperStyled>
  );
};

const WrapperStyled = styled.div`
  display: flex;
  gap: 3em;
`;

const ItemImageStyled = styled(ImageStyled)`
  max-width: 110px;
`;

const ItemDetailsStyled = styled.div`
  * {
    margin-bottom: 0.5em;
  }
  align-self: center;
`;

const NameStyled = styled.h5(
  ({theme}) => `font-weight: ${theme.regular}`
);

const PriceStyled = styled.h3(
  ({theme}) => `font-weight: ${theme.semiBold}`
);;

export default ItemDetail;
