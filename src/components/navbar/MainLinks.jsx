import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const MainLinks = () => {
  return (
    <NavListWrapperStyled>
      <NavItemStyled>
        <NavLink to='/'>Home</NavLink>
      </NavItemStyled>
      <NavItemStyled>
        <NavLink to='/products'>Shop</NavLink>
      </NavItemStyled>
      <NavItemStyled>
        <NavLink to='/#TopDeals'>Top Deals</NavLink>
      </NavItemStyled>
      <NavItemStyled>
        <NavLink to='/#NewArrivals'>New Arrivals</NavLink>
      </NavItemStyled>
    </NavListWrapperStyled>
  );
};

const NavListWrapperStyled = styled.ul`
    display:flex;
    gap: 1em;    
    font-size: .9rem;
`;

const NavItemStyled = styled.li`
    list-style-type: none;
`;
export default MainLinks;
