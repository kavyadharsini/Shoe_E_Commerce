import React, { useState } from 'react';
import styled from 'styled-components';
import { Parallax } from 'react-parallax';
import shoeData from '../data/shoeData.json';

// Container for the entire component
const Container = styled.div`
  text-align: center;
  margin-top: 20px;
  color: #333;
`;
// Styling for the shoe name (header)
const ShoeName = styled.h1`
  font-size: 2.5rem;
  color: #1a237e;  // Deep blue for contrast
  font-weight: bold;
  margin-bottom: 0.5rem;
`;
const ShoeName1 = styled.p`
  font-size: 1.5rem;
  color: violet;  // Deep blue for contrast
  font-weight: bold;
`;

// Styling for the shoe description
const ShoeDescription = styled.p`
  font-size: 1.2rem;
  color: #616161; // Grey for subtlety
  margin-bottom: 2rem;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
`;

const ShoePrice = styled.p`
  font-size: 1.2rem;
  color: green; // Grey for subtlety
  padding-bottom:100px;
`;

const MainImage = styled.img`
  width: 100%;
  max-width: 500px;
  max-height: 550px;
  border-radius: 10px;
  box-shadow: 0 8px 16px rgba(0,0,0,0.1);
`;

const ThumbnailContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 20px;
`;

const Thumbnail = styled.img`
  width: 100px;
  height: 100px;
  margin: 10px;
  cursor: pointer;
  border: 3px solid ${props => props.isSelected ? '#007BFF' : 'transparent'};
  transition: transform 0.2s, border-color 0.2s;
  &:hover {
    transform: scale(1.1);
    border-color: #007BFF;
  }
`;

const InfoSection = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin: 20px 0;
`;


const ShoeDisplay = () => {
  const [selectedImage, setSelectedImage] = useState(shoeData.shoes[0].colorways[0].image);
  const shoe = shoeData.shoes[0];

  const handleThumbnailClick = (image) => {
    setSelectedImage(image);
  };

  return (
    <Container>
      <ShoeName>{shoe.name}</ShoeName>
      <ShoeDescription>{shoe.description}</ShoeDescription>
      <MainImage src={selectedImage} alt={shoe.name} />
      <div><p>Choose your Lovely color..</p>
      </div>
      <ThumbnailContainer>
        {shoe.colorways.map((colorway, index) => (
          <Thumbnail
            key={index}
            src={colorway.image}
            alt={colorway.name}
            onClick={() => handleThumbnailClick(colorway.image)}
            isSelected={selectedImage === colorway.image}
          />
        ))}
      </ThumbnailContainer>
      <ShoeName1><p>{shoe.name}</p></ShoeName1>
      <ShoePrice><p>${shoe.price}</p></ShoePrice>
      <Parallax bgImage="images/new.png" strength={200}>
        <InfoSection style={{ height: 600 }}> 
          {/* <h1>{shoe.name}</h1>
          <InfoText>{shoe.description}</InfoText>
          <h2>Features</h2>
        //   {shoe.features.map((feature, index) => (
            <InfoText key={index}>{feature.name}: {feature.description}</InfoText>
          ))}
          <h2>Technology</h2>
          {shoe.technology.map((tech, index) => (
            <InfoText key={index}>{tech.name}: {tech.description}</InfoText>
          ))} */}
        </InfoSection>
      </Parallax>
    </Container>
  );
};

export default ShoeDisplay;
