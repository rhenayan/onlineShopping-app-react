
import React from 'react';
import styled from 'styled-components';

const Button = ({ children }) => (
  <ButtonStyled>{children}</ButtonStyled>
);

const ButtonOutline = ({ children}) => (
  <ButtonOutlineStyled >{children}</ButtonOutlineStyled>
);

const ButtonGroup = ({ children, width}) => (
  <ButtonGroupStyled width={width}>
    {children}
  </ButtonGroupStyled>
);


const ButtonStyled = styled.button`
  color: white;
  border: 1px solid black;
  background: black;
  padding: 0.4em;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.5s;

  &:hover,
  &:focus {
    color: black;
    border: 1px solid black;
    background: transparent;
  }

  svg {
    margin-right: 1rem;
  }
`;

const ButtonOutlineStyled = styled(ButtonStyled)`
  color: black;
  border: 1px solid black;
  background: transparent;

  &:hover,
  &:focus {
    color: white;
    border: 1px solid black;
    background: black;
  }
`;

const ButtonGroupStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5em;
  width: ${props => props.width };
`;

export { Button, ButtonOutline, ButtonGroup };
