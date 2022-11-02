import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ButtonStyled } from '../../styles/Button.style';
import Product from '../../components/common/Product';
import SectionTitle from '../../components/common/SectionTitle';
import { useGetAllProductsQuery } from '../../features/apiSlice';
import GalleryWrapper from '../../components/common/GalleryWrapper';

const TopDeals = ({ title, subtitle }) => {
  const { data: homeProducts } = useGetAllProductsQuery();


  return (
    <>
      <SectionTitle title={title} subtitle={subtitle} />

      <GalleryWrapper>
        {homeProducts
          .filter(product => product.rating.rate > 4)
          .slice(0, 6)
          .map(product => (
            <Product key={product.id} {...product} />
          ))}
      </GalleryWrapper>

      <LinkStyled to='/products'>
        <ButtonStyled outline large>
          Shop Now
        </ButtonStyled>
      </LinkStyled>
    </>
  );
};


const LinkStyled= styled(Link)`
width: 150px;
margin: auto;
display: block;
`




export default TopDeals;
