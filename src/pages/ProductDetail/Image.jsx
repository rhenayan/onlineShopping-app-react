import React from 'react';
import styled from 'styled-components';
import dummyimage from '../../DUMMY_IMAGE.jpg';

const Image = () => {
  return (
    <ImageWrapperStyled>
      <ImageStyled src={dummyimage} />
    </ImageWrapperStyled>
  );
};

const ImageWrapperStyled = styled.section`
  grid-area: image;
`;
const ImageStyled = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    transform:scale(.8);
    mix-blend-mode: multiply;
`;

export default Image;
