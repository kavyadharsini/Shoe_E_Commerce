import React from 'react';
import styled from 'styled-components';

const HeroContainer = styled.div`
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: relative;
  overflow: hidden;
`;

const HeroMedia = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;

const HeroImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(0.6);
`;

const HeroVideo = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const TextOverlay = styled.div`
  position: relative;
  color: white;
  z-index: 1;
  text-align: center;
`;

const Headline = styled.h1`
  font-size: 4rem;
  margin: 0;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.7);
`;

const Subheading = styled.p`
  font-size: 1.8rem;
  margin: 20px 0;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.7);
`;

const Button = styled.button`
  padding: 15px 30px;
  font-size: 1.5rem;
  background-color: #f5a623;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;

  &:hover {
    background-color: #f59e0b;
    transform: scale(1.05);
  }
`;

const HeroSection = () => {
  const videoExists = true; // Replace with actual logic

  const handleLearnMoreClick = () => {
    window.location.href = '#services';
  };

  return (
    <HeroContainer>
      <HeroMedia>
        {videoExists ? (
          <HeroVideo autoPlay loop muted>
            <source src="/video/heroSection.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </HeroVideo>
        ) : (
          <HeroImage src="../../public/images/hero.jpg" alt="Nike Air Max Infinity" />
        )}
      </HeroMedia>
      <TextOverlay>
        <Headline>Discover the Future of Comfort</Headline>
        <Subheading>Nike Air Max Infinity - Elevate Your Style and Comfort</Subheading>
        <Button onClick={handleLearnMoreClick}>Learn More</Button>
      </TextOverlay>
    </HeroContainer>
  );
};

export default HeroSection;
