import React from 'react';
import styled from 'styled-components';
import Box from '../../components/common/Box';
import GalleryWrapper from '../../components/common/GalleryWrapper';
import {
  BsTruck,
  BsCashStack,
  BsArrowCounterclockwise,
  BsClock,
} from 'react-icons/bs';

const services = [
  {
    id: 1,
    icon: BsTruck,
    title: 'Free shipping',
    subtitle: 'Lorem ipsum dolor sit amet',
  },

  {
    id: 2,
    icon: BsCashStack,
    title: 'Cash on delivery',
    subtitle: ' Voluptatum impedit doloremque',
  },

  {
    id: 3,
    icon: BsArrowCounterclockwise,
    title: '45 days return',
    subtitle: 'Optio quos modi nihil dolore debitis ',
  },

  {
    id: 4,
    icon: BsClock,
    title: 'Online Support',
    subtitle: 'Illo quisquam itaque aliquam vel',
  },
];
const Services = () => {
  return (
    <Box>
      <GridWrapperStyled>
        {services.map(service => (
          <ContentWrapperStyled key={service.id}>
            <IconStyled>{<service.icon />}</IconStyled>
            <TextsWrapper>
              <TitleStyled>{service.title}</TitleStyled>
              <SubtitleStyled>{service.subtitle}</SubtitleStyled>
            </TextsWrapper>
          </ContentWrapperStyled>
        ))}
      </GridWrapperStyled>
    </Box>
  );
};

const GridWrapperStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  grid-gap: 1em;
  padding-inline: .2em;
`;
const ContentWrapperStyled = styled.div`
  display: flex;
  gap: 1em;
  padding-block: 1.2em;
`;

const IconStyled = styled.span`
  align-self: center;
  text-align: center;
  flex: 0;
  ${({ theme }) => `
        font-size: ${theme.fs_scale5};
        color: ${theme.text.accent};
    `}
`;

const TextsWrapper = styled.section`
  flex:2;
`;

const TitleStyled = styled.h5(
  ({ theme }) => `
          font-size: ${theme.fs_scale3};
          font-weight: ${theme.bold};
          line-height: 1.3;`
    
);

const SubtitleStyled = styled.h6(
  ({ theme }) => `
        font-size: ${theme.fs_scale2};
        font-weight: ${theme.light}`
);
export default Services;
