import React from 'react';
import styled from 'styled-components';

const Dropdown = ({ categories }) => {
  const [all, women, men, jewelry, electronics] = categories;
  return (
    <SelectStyled>
      <option value='All'>{all}</option>
      <option value='Women'>{women}</option>
      <option value='Men'>{men}</option>
      <option value='hamster'>{jewelry}</option>
      <option value='parrot'>{electronics}</option>
    </SelectStyled>
  );
};

const SelectStyled = styled.select`

  width:100%;
  outline: 0;
  box-shadow: none;
  background: white;
  border: 1px solid black;
  padding: 0.2em;
  @media (min-width: 469px) {
    display: none;
  }
`;

export default Dropdown;
