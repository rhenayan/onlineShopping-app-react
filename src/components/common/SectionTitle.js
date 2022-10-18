import React from 'react';
import styled from 'styled-components';

const SectionTitle = ({ title, subtitle }) => {
  return (
    <TitleWrapperStyled>
      <TitleStyled>{title}</TitleStyled>
      <SubtitleStyled>{subtitle}</SubtitleStyled>
    </TitleWrapperStyled>
  );
};



const TitleWrapperStyled = styled.div`

    text-align: center;
`
const TitleStyled = styled.h2`

  
  margin: unset;
`;

const SubtitleStyled = styled.h4`
  
  margin:unset;
`;

export default SectionTitle;
