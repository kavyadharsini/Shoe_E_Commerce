import React from 'react';
import styled from 'styled-components';

// Main container for testimonials
const TestimonialsContainer = styled.div`
  background-color: #f4f4f4;
  padding: 50px 20px;
  text-align: center;
`;

const CardsContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 20px;
`;

// Individual card styling
const TestimonialCard = styled.div`
  background: white;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 15px;
  width: 300px;
  box-shadow: 0 6px 15px rgba(0,0,0,0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px); // subtle lift effect on hover
  }
`;

const ImageContainer = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  overflow: hidden;
  margin-bottom: 10px;
`;

const StarRating = styled.div`
  font-size: 1.2rem;
  color: #FFD700; // gold color for stars
  margin: 10px 0;
`;

const TestimonialText = styled.p`
  font-style: italic;
  margin-bottom: 10px;
`;

const Citation = styled.cite`
  font-style: normal;
  color: #333;
`;

const Heading = styled.h2`
  font-size: 2rem;
  color: #333;
  margin-bottom: 20px;
`;

const Testimonials = () => {
  return (
    <TestimonialsContainer>
      <Heading>What Our Athletes Say</Heading>
      <CardsContainer>
      <TestimonialCard>
          <ImageContainer>
            <img src="/images/images.jpeg" alt="Cristiano Ronaldo" style={{ width: '100%' }} />
          </ImageContainer>
          <StarRating>★★★★★</StarRating>
          <TestimonialText>"The Nike Air Max Infinity provides the perfect blend of style and performance. It's a must-have for any serious athlete."</TestimonialText>
          <Citation>- Cristiano Ronaldo</Citation>
        </TestimonialCard>
        <TestimonialCard>
          <ImageContainer>
            <img src="/images/james.webp" alt="LeBron James" style={{ width: '100%' }} />
          </ImageContainer>
          <StarRating>★★★★★</StarRating>
          <TestimonialText>"The Nike Air Max Infinity is a game-changer. The comfort and support it provides on the court are unparalleled."</TestimonialText>
          <Citation>- LeBron James</Citation>
        </TestimonialCard>
        <TestimonialCard>
          <ImageContainer>
            <img src="/images/serena.webp" alt="Serena Williams" style={{ width: '100%' }} />
          </ImageContainer>
          <StarRating>★★★★★</StarRating>
          <TestimonialText>"I've never worn a shoe that offers such incredible cushioning and stability. The Nike Air Max Infinity is my go-to for both training and matches."</TestimonialText>
          <Citation>- Serena Williams</Citation>
        </TestimonialCard>
      </CardsContainer>
    </TestimonialsContainer>
  );
};

export default Testimonials;
