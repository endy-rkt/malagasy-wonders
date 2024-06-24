import React from 'react';
import styled from 'styled-components';

export const Page404 = () => {
  return (
    <Container>
      <span className='content'>Oups! 404 not found</span>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-size: 5em;
  color: #2BB9AE;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    font-size: 3em; /* Adjust font size for smaller screens */
  }
`;
