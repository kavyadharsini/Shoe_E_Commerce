import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import shoeData from '../data/shoeData.json';

// Animations
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

// Styled Components
const SectionContainer = styled.div`
  padding: 50px 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  background: #f4f4f4;
  position: relative;
`;

const ProductCard = styled.div`
  width: 250px;
  position: relative;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  overflow: hidden;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  cursor: pointer;
  animation: ${fadeIn} 0.5s ease-out;
  
  &:hover {
    transform: scale(1.03);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
  }
`;

const ProductImage = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
  transition: opacity 0.3s ease-in-out;

  ${ProductCard}:hover & {
    opacity: 0.8;
  }
`;

const ProductInfo = styled.div`
  padding: 15px;
  text-align: center;
  background: white;
  position: absolute;
  bottom: 0;
  width: 100%;
  opacity: 0.9;
  transition: opacity 0.3s ease-in-out;
  box-shadow: 0 -5px 10px rgba(0, 0, 0, 0.1);
  background: rgba(255, 255, 255, 0.9);

  h3 {
    margin: 0;
    font-size: 1.2rem;
  }

  p {
    margin: 5px 0;
    font-size: 1rem;
    color: #333;
  }
`;

const SectionHeader = styled.h2`
  width: 100%;
  text-align: center;
  color: #333;
  font-size: 2.6rem;
  padding: 20px 0;
`;

const Lightbox = styled.div`
  position: fixed;
  top: 50px; /* Adjust this value based on your navbar height */
  left: 0;
  width: 100%;
  height: calc(100% - 50px); /* Adjust this value based on your navbar height */
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
  transition: opacity 0.3s ease-in-out;
  opacity: ${props => (props.show ? 1 : 0)};
  visibility: ${props => (props.show ? 'visible' : 'hidden')};
  pointer-events: ${props => (props.show ? 'auto' : 'none')};
`;

const LightboxContent = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 90%;
  max-height: 90%;
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  animation: ${fadeIn} 0.5s ease-out;
  position: relative;
`;

const LightboxImageContainer = styled.div`
  flex: 1;
  margin-right: 20px;
  display: flex;
  flex-direction: column;
`;

const LightboxImage = styled.img`
  width: 100%;
  max-height: 500px;
  object-fit: contain;
  border-radius: 4px;
  cursor: zoom-out;
`;

const ThumbnailContainer = styled.div`
  display: flex;
  margin-top: 10px;
  gap: 10px;
  overflow-x: auto;
`;

const Thumbnail = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  border: 2px solid ${props => (props.isSelected ? '#007BFF' : 'transparent')};
  border-radius: 4px;
  cursor: pointer;
  transition: border-color 0.3s ease-in-out;

  &:hover {
    border-color: #007BFF;
  }
`;

const DetailCard = styled.div`
  flex: 1;
  margin-top: 20px;
  text-align: left;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: transparent;
  border: none;
  color: #333;
  font-size: 2rem;
  cursor: pointer;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: #007BFF;
  }
`;

const ListHeader = styled.h4`
  margin-bottom: 10px;
  font-size: 1.2rem;
`;

const FeatureList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

const FeatureItem = styled.li`
  font-size: 1rem;
  color: #333;
`;

const TechnologyList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

const TechnologyItem = styled.li`
  font-size: 1rem;
  color: #333;
`;

// Component
const ProductSection = () => {
  const [selectedShoe, setSelectedShoe] = useState(null);
  const [showLightbox, setShowLightbox] = useState(false);
  const [displayedImage, setDisplayedImage] = useState('');
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const handleImageClick = (shoe) => {
    setSelectedShoe(shoe);
    setDisplayedImage(shoe.colorways[0].image);
    setSelectedImageIndex(0); // Reset to the first image
    setShowLightbox(true);
  };

  const handleThumbnailClick = (image) => {
    setDisplayedImage(image);
    const index = selectedShoe.colorways.findIndex(colorway => colorway.image === image);
    setSelectedImageIndex(index);
  };

  return (
    <SectionContainer>
      <SectionHeader>Shop Our Products</SectionHeader>
      {shoeData.shoes.map((shoe, index) => (
        <ProductCard key={index} onClick={() => handleImageClick(shoe)}>
          <ProductImage src={shoe.colorways[0].image} alt={shoe.name} />
          <ProductInfo>
            <h3>{shoe.name}</h3>
            <p>${shoe.price}</p>
          </ProductInfo>
        </ProductCard>
      ))}
      {selectedShoe && (
        <Lightbox show={showLightbox}>
          <LightboxContent>
            <LightboxImageContainer>
              <LightboxImage src={displayedImage} alt={selectedShoe.name} />
              <ThumbnailContainer>
                {selectedShoe.colorways.map((colorway, index) => (
                  <Thumbnail
                    key={index}
                    src={colorway.image}
                    alt={colorway.name}
                    isSelected={displayedImage === colorway.image}
                    onClick={() => handleThumbnailClick(colorway.image)}
                  />
                ))}
              </ThumbnailContainer>
            </LightboxImageContainer>
            <DetailCard>
              <h3>{selectedShoe.name}</h3>
              <p>${selectedShoe.price}</p>
              <ListHeader>Features</ListHeader>
              <FeatureList>
                {selectedShoe.features.map((feature, index) => (
                  <FeatureItem key={index}>{feature.name}: {feature.description}</FeatureItem>
                ))}
              </FeatureList>
              {selectedShoe.technology && (
                <>
                  <ListHeader>Technology</ListHeader>
                  <TechnologyList>
                    {selectedShoe.technology.map((tech, index) => (
                      <TechnologyItem key={index}>
                        {tech.name}: {tech.description}
                      </TechnologyItem>
                    ))}
                  </TechnologyList>
                </>
              )}
            </DetailCard>
            <CloseButton onClick={() => setShowLightbox(false)}>×</CloseButton>
          </LightboxContent>
        </Lightbox>
      )}
    </SectionContainer>
  );
};

export default ProductSection;
