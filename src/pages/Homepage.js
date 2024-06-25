import React from 'react';
import Discover from "../components/Discover";
import Explore from '../components/Explore';
import Navbar from "../components/Navbar";
import FooterPage from "../components/FooterPg";
import styled from 'styled-components';
import Hero from '../components/Hero';

export const Homepage = () => {
  return (
    <Container>
      <Navbar className='home'/>
      <Discover />
	    <Explore/>
	    <Hero/>
      <FooterPage />
    </Container>
  );
};

const Container = styled.main`
  display: flex;
  flex-direction: column;
  gap:1rem;
  height: 100vh; /* Set the height for full viewport */
  margin: 0 2px;
`;
