import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { getActiveSort } from '../../../features/filterSlice';

const selectOptions = [
  {
    id: 1,
    text: 'Sort by',
    option: '',
  },

  {
    id: 2,
    text: 'Lowest',
    option: 'Lowest',
  },

  {
    id: 3,
    text: 'Highest',
    option: 'Highest',
  },
];

const SortByPrice = () => {
  const dispatch = useDispatch();
  const { sortSelectedValue } = useSelector(state => state.filter);

  return (
    <FormStyled>
      <SelectStyled
        value={sortSelectedValue}
        onChange={e => dispatch(getActiveSort(e.target.value))}
      >
        {selectOptions.map(select => <OptionStyled value={select.option} key={select.id}>{select.text}</OptionStyled> )}
      </SelectStyled>
    </FormStyled>
  );
};

const FormStyled = styled.form`
  width: auto;
`;

const SelectStyled = styled.select`
  ${({ theme }) => `
    border: 2px solid ${theme.border};
    color: ${theme.text.dark};
    background: ${theme.bg.body};
  
  `}

  width:100px;
  outline: none;
  box-shadow: none;
  padding: 0.2em;
`;

const OptionStyled = styled.option(
  ({ theme }) => `
    
  background-color: ${theme.bg.button};
  color: ${theme.text.light};

  `
);

export default SortByPrice;
