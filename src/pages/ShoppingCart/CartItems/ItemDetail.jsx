import React from 'react';
import styled from 'styled-components';
import { ButtonSecondary } from '../../../components/common/Button';
import dummyimage from '../../../DUMMY_IMAGE.jpg'

const ItemDetail = () => {
  return (
    <WrapperStyled>
      <ItemImageStyled src={dummyimage} />
      <ItemDetailsStyled>
        <NameStyled>Jacket</NameStyled>
        <PriceStyled>$299.50</PriceStyled>
        <ButtonSecondary> remove </ButtonSecondary>
      </ItemDetailsStyled>
    </WrapperStyled>
  );
};



const WrapperStyled = styled.div`
  display: flex;
  gap: 3em;
`;

const ItemImageStyled = styled.img`
  width: 110px;
  height: 100%;
`;

const ItemDetailsStyled = styled.div`
  * {
    margin-bottom: 0.5em;
  }
  align-self:center;
`;

const NameStyled = styled.h5``;

const PriceStyled = styled.h3`
  
`;


export default ItemDetail;
