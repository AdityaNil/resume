import React from 'react';
import abtimg from '../assets/abtimg.jpg';
import resume from '../assets/resume.pdf';
import styled from 'styled-components';
import { device } from '../styles/Media';

const About = () => {
  const download = () => {
    const link = document.createElement('a');
    link.href = resume;
    link.download = 'Aditya_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <StyledAbout>
      <Heading><u>About</u></Heading>
      <Container>
        <ImageContainer>
          <StyledImage src={abtimg} alt='loading' />
        </ImageContainer>
        <TextContainer>
          <Intro>Hi! I Am Aditya,</Intro>
          <Description>
            A versatile, hardworking individual who is motivated to provide high-quality software products that meet or exceed a company's expectations. An attentive learner with the ability to explain technical concepts in an approachable manner. Possess a solid foundation in innovative problem-solving techniques and the capacity to multitask and set priorities in hectic, high-pressure situations.
          </Description>
          <DownloadCV onClick={download}>Download CV</DownloadCV>
        </TextContainer>
      </Container>
    </StyledAbout>
  );
};

const StyledAbout = styled.div`
  background-color: #FEFAF6;
  padding-left: 160px;
  padding-right: 160px;
  margin-top: -25px;

  @media ${device.laptopL} {
    padding-left: 80px;
    padding-right: 80px;
  }

  @media ${device.tablet} {
    padding-left: 40px;
    padding-right: 40px;
  }

  @media ${device.mobileL} {
    padding-left: 20px;
    padding-right: 20px;
  }
`;

const Heading = styled.h1`
  text-align: center;
  font-size: 50px;

  @media ${device.tablet} {
    font-size: 40px;
  }

  @media ${device.mobileL} {
    font-size: 30px;
  }
`;

const Container = styled.div`
  display: inline-flex;
  gap: 40px;
  margin-top: 20px;

  @media ${device.tablet} {
    flex-direction: column;
    align-items: center;
  }
`;

const ImageContainer = styled.div``;

const StyledImage = styled.img`
  height: 70vh;
  width: 70vh;

  @media ${device.tablet} {
    height: 50vh;
    width: 50vh;
  }

  @media ${device.mobileL} {
    height: 30vh;
    width: 30vh;
  }
`;

const TextContainer = styled.div``;

const Intro = styled.h2`
  font-size: 25px;

  @media ${device.mobileL} {
    font-size: 20px;
  }
`;

const Description = styled.p`
  font-size: 20px;

  @media ${device.mobileL} {
    font-size: 18px;
  }
`;

const DownloadCV = styled.h2`
  display: inline-flex;
  border: 3px solid #40A578;
  padding: 5px;
  cursor: pointer;

  @media ${device.mobileL} {
    padding: 3px;
    font-size: 16px;
  }
`;

export default About;
