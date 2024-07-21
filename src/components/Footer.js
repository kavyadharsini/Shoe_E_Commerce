import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background: linear-gradient(180deg, #333 0%, #000 100%);
  color: white;
  padding: 40px 20px;
  text-align: center;
  box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.2);
`;

const Links = styled.div`
  margin: 20px 0;
  
  a {
    color: #f5a623;
    text-decoration: none;
    margin: 0 15px;
    
    &:hover {
      text-decoration: underline;
    }
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <p>Get shoes ready for the new term at your nearest Nike store. Find Your perfect Size In Store. Get Rewards</p>
      <Links>
        <a href="/">Terms & Conditions</a>
        <a href="/">Privacy Policy</a>
      </Links>
      <p>© 2024 Nike, Inc. All Rights Reserved.</p>
    </FooterContainer>
  );
};

export default Footer;
