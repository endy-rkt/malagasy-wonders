import React from 'react';
import styled from 'styled-components';
import test from "../images/baobab-allee.jpg"

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background-color: #F0EEE8;
  background-image: url(${test});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  margin-top: 100px;
  padding: 2rem;
  background-color: rgba(255, 255, 255, 0.8); /* White background with 80% opacity */
  border-radius: 10px; /* Rounded corners for a softer look */

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Title = styled.h1`
  font-size: 3em;
  text-align: center;
  color: #2BB9AE; /* Primary brand color */
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
`;

const TextContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 2rem;
  width: 60%;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const TextColumn = styled.div`
  width: 45%;
  margin-bottom: 2rem;

  h3 {
    font-size: 1.3em;
    color: #2BB9AE; /* Primary brand color */
    margin-bottom: 1rem;
  }

  p {
    font-size: 1em;
    color: #333;
    line-height: 1.5;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
`;

const ExploreButton = styled.button`
  padding: 1rem 2rem;
  background-color: #2BB9AE; /* Primary brand color */
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: #27AA9A;
  }
`;

const LearnMoreButton = styled.button`
  padding: 1rem 2rem;
  background-color: #fff; /* White background */
  color: #2BB9AE; /* Primary brand color */
  border: 1px solid #2BB9AE; /* Primary brand color border */
  border-radius: 5px;
  cursor: pointer;
  margin-left: 1rem;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: #EAEAEA;
  }
`;

const Explore = () => {
  return (
    <Wrapper>
      <ContentContainer>
        <Title>Discover the Wonders of Madagascar</Title>
        <TextContainer>
          <TextColumn>
            <h3>Uncover Cultural Treasures</h3>
            <p>
              Immerse yourself in the vibrant traditions, rich history, and
              diverse ethnicities of Madagascar. Navigate our website to
              uncover the beauty and uniqueness of Malagasy culture.
            </p>
          </TextColumn>
          <TextColumn>
            <h3>Plan Your Journey</h3>
            <p>
              Get practical
				get practical travel tips, explore must-see destinations, and
				discover hidden gems. Start planning your unforgettable
				Malagasy adventure today!
		  </p>
		</TextColumn>
	  </TextContainer>
	  <ButtonContainer>
		<ExploreButton>Explore Madagascar</ExploreButton>
		<LearnMoreButton>Learn More</LearnMoreButton>
	  </ButtonContainer>
	</ContentContainer>
  </Wrapper>
);
};

export default Explore;
