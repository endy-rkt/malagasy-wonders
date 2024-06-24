import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background-color: #F0EEE8;
  background-image: url("path/to/your/image.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;

  h1 {
    font-size: 3em;
    text-align: center;
    color: #fff;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
  

  h2 {
    font-size: 1.5em;
    text-align: center;
    color: #fff;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
  }
`;

const ButtonContainer = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  button {
    padding: 1rem 2rem;
	margin-left: 2rem;
    background-color: #2BB9AE;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-weight: bold;
    transition: all 0.3s ease-in-out;

    &:hover {
      background-color: #27AA9A;
    }
  }
`;

const ExploreButton = styled.button`
  padding: 1rem 2rem;
  background-color: #F0EEE8;
  color: #2BB9AE;
  border: 1px solid #2BB9AE;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  transition: all 0.3s ease-in-out;
  margin-left: 1rem;

  &:hover {
    background-color: #EAEAEA;
  }
`;

const Hero = () => {
  return (
    <Wrapper>
      <TitleContainer>
        <h1>Discover the Cultural Tapestry of Madagascar</h1>
        <h2>Immerse yourself in the rich heritage and traditions</h2>
      </TitleContainer>
      <ButtonContainer>
        <ExploreButton>Explore</ExploreButton>
        <button className='left-btn'>Learn More</button>
      </ButtonContainer>
    </Wrapper>
  );
};

export default Hero;
