import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'; // Import Link for navigation

const CultureSection = () => {
  return (
    <CultureContainer>
      <h2>Explore Malagasy Culture</h2>
      <CultureLinks>
        <LinkStyled to="/discover-tradition">Discover Tradition</LinkStyled>
        <LinkStyled to="/proverb">Proverb of the Day</LinkStyled>
        <LinkStyled to="/myth">Myths and Legends</LinkStyled>
      </CultureLinks>
    </CultureContainer>
  );
};

const CultureContainer = styled.div`
  text-align: center;
  padding: 2rem;
`;

const CultureLinks = styled.ul`
  display: flex;
  justify-content: space-around;
  list-style: none;
  padding: 0;
  margin: 1rem 0;
`;

const LinkStyled = styled(Link)`
  text-decoration: none;
  color: inherit;
  font-weight: bold;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: #2BB9AE; /* Change hover color */
  }
`;

export default CultureSection;
