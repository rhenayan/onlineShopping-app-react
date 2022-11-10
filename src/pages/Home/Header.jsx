import React from 'react';
import styled from 'styled-components';
import Box from '../../components/common/Box';
import BackgroundImage from '../../assets/images/hero-bg.jpg';
import { ButtonStyled } from '../../styles/Button.style';

const Header = () => {
  return (
    <ContainerStyled>
      <Box>
        <h1>
          Every purchase will be made <br /> with pleasure.
        </h1>
        <h3>
          We work with global brands and have created <br /> an application for
          you to do shopping.
        </h3>
        <HeroButtonStyled>Go shopping!</HeroButtonStyled>
      </Box>
    </ContainerStyled>
  );
};

const ContainerStyled = styled.header`
  display: flex;
  align-items: center;
  padding: 8em 0.2em;
  margin-top: 50px;
  background: #e0c3bf url(${BackgroundImage}) no-repeat;
  background-position-x: 150px;
  background-size: cover;

  h1 {
    font-size: ${({ theme }) => theme.fs_scale8};
    line-height: 1.2;
    max-width: 650px;
  }

  h3 {
    font-weight: ${({ theme }) => theme.semiBold};
    margin-block: 1em;
  }
`;

const HeroButtonStyled = styled(ButtonStyled)`
  padding: 0.7em 2em;
`;

export default Header;
