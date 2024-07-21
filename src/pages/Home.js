// src/pages/Home.js
import React from 'react';
import HeroSection from '../components/HeroSection';
import ShoeDisplay from '../components/ShoeDisplay';
import { shoes } from '../data'; // Assuming you have this data

const Home = () => {
  const shoe = shoes[0];

  if (!shoe) {
    return <div>Loading...</div>; // Handle cases where shoe data is not available
  }

  return (
    <>
      <HeroSection shoe={shoe} />
      <ShoeDisplay />
    </>
  );
};

export default Home;
