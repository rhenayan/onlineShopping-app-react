import React from 'react';
import styled from 'styled-components';

const Dropdown = ({ categories }) => {
  const [all, women, men, jewelry, electronics] = categories;
  return (
    <SelectStyled>
      <OptionStyled value='All'>{all}</OptionStyled>
      <OptionStyled value='Women'>{women}</OptionStyled>
      <OptionStyled value='Men'>{men}</OptionStyled>
      <OptionStyled value='hamster'>{jewelry}</OptionStyled>
      <OptionStyled value='parrot'>{electronics}</OptionStyled>
    </SelectStyled>
  );
};



const SelectStyled = styled.select`
  ${({theme}) => `
    border: 2px solid ${theme.border};
    color: ${theme.text.dark};
    background: ${theme.bg.body};
  
  `}
  width: 100%;
  outline:none;
  box-shadow: none;

  padding: 0.2em;
 

  @media (min-width: 469px) {
    display: none;
  }
`;


const OptionStyled = styled.option(
  ({theme}) => `
    
  background-color: ${theme.bg.button};
  color: ${theme.text.light};

  `
)


export default Dropdown;
