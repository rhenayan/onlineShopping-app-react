import React from 'react'
import styled from 'styled-components'
import Logo from './Logo'
import MainLinks from './MainLinks'
import CartCounter from './CartCounter'



const Navbar = () => {
  return (
    <NavbarContainerStyled>
        <Logo/>
        <MainLinks/>
        <CartCounter/>
    </NavbarContainerStyled>
  )
}


const NavbarContainerStyled = styled.nav`
    display:flex;
    justify-content: space-between;
    align-items: center;
    padding-inline: 10em;
    height: 50px;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 2;
    background: ${({theme}) => theme.bg.nav};
`
export default Navbar