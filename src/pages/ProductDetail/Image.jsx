import React from 'react';
import styled from 'styled-components';
import ImageStyled from '../../styles/Image.style';

const Image = ({image}) => {
  return (
    <ImageWrapperStyled>
      <ImageNewStyled src={image} />
    </ImageWrapperStyled>
  );
};

const ImageWrapperStyled = styled.section`
  grid-area: image;
`;
const ImageNewStyled = styled(ImageStyled)`
    transform:scale(.8);
`;

export default Image;
