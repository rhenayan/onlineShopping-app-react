import React from 'react';
import styled from 'styled-components';
import ImageStyled from '../../styles/Image.style';
import dummyimage from '../../DUMMY_IMAGE.jpg';

const Image = () => {
  return (
    <ImageWrapperStyled>
      <ImageNewStyled src={dummyimage} />
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
