import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 30px;
  background-color: #000;
  color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

const Logo = styled.img`
  width: 120px;
  transition: transform 0.3s;
  
  &:hover {
    transform: scale(1.1);
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 20px;

  a {
    color: white;
    text-decoration: none;
    font-size: 1rem;
    position: relative;
    padding: 5px 0;
    
    &:hover {
      color: #f5a623;
      
      &::after {
        content: '';
        position: absolute;
        left: 0;
        bottom: -5px;
        width: 100%;
        height: 2px;
        background: #f5a623;
        transform: scaleX(1);
        transition: transform 0.3s;
      }
    }
  }
`;

const Header = () => (
  <NavBar>
    <Logo src="path_to_nike_logo.svg" alt="Nike Logo" />
    <NavLinks>
      <Link to="#hero">Home</Link>
      <Link to="#features">Features</Link>
      <Link to="#shop">Shop</Link>
      <Link to="#contact">Contact Us</Link>
    </NavLinks>
  </NavBar>
);

export default Header;
