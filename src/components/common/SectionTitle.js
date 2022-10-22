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
    line-height: 1.8;
`
const TitleStyled = styled.h2(
  ({ theme }) => `
  font-weight: ${theme.bold};
  color: ${theme.text.accent};
  letter-spacing: .8px;
`
)




const SubtitleStyled = styled.h4(
  ({ theme }) => `
  font-weight: ${theme.regular}
`
)


export default SectionTitle;
