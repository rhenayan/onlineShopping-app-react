import React from 'react';
import styled from 'styled-components';

const ButtonGroup = ({ children, width }) => (
  <ButtonGroupStyled width={width}>{children}</ButtonGroupStyled>
);

const ButtonStyled = styled.button(
  ({ theme, outline, large}) => `
  color: ${outline ? theme.text.accent : theme.text.light};
  border: 1px solid ${theme.border};
  background: ${outline ? 'transparent' : theme.bg.button};
  font-weight: ${theme.semiBold};
  padding: 0.4em;
  font-size: ${large ? '1.3rem' : '1rem'};
  cursor: pointer;
  transition: all 0.5s;

  &:hover,
  &:focus {
  color: ${outline ? theme.text.light : theme.text.accent};
  border: 1.2px solid ${theme.border};
  background: ${outline ? theme.bg.button : 'transparent'};
}
`)

const ButtonGroupStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5em;
  width: ${props => props.width};
`;

export { ButtonGroup, ButtonStyled };
