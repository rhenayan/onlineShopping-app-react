import React from 'react';
import { BsSearch } from 'react-icons/bs';
import styled from 'styled-components';
import useToggle from '../../../hooks/useToggle'

const SearchBar = () => {

  const [isInputExtended, setIsInputExtended] = useToggle();

  return (
    <SearchWrapperStyled>
      <InputStyled
        id='search'
        name='search'
        type='text'
        placeholder="What're we looking for?"
        isInputExtended={isInputExtended}
      />
      <IconWrapperStyled>
        <BsSearch size='1.4em' onClick={setIsInputExtended}/>
      </IconWrapperStyled>
    </SearchWrapperStyled>
  );
};


const SearchWrapperStyled = styled.div`
  display:flex;
  justify-content: flex-end;
  align-items: center;
  
  cursor:pointer;
  width: 68%;

  @media (min-width: 469px) {
    width: 50%;
  }
`
const IconWrapperStyled = styled.span`
  
`;


const InputStyled = styled.input`
  height: 25px;
  width:${props => props.isInputExtended ? '100%' : '0px'};
  font-size: 1em;
  font-weight: 100;
  background:transparent;
  display: inline-block;
  border-width: 0;
  border-bottom: ${props => props.isInputExtended ? '1px inset gray' : null};
  outline: none;
  color: #555;
  padding: 3px;
  transition: width .4s cubic-bezier(0.000, 0.795, 0.000, 1.000);
  
  @media (max-width: 468px) {
    width: 100%;
    border-bottom: 1px inset gray;
  }
`
export default SearchBar;
