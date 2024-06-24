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

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  margin-top: 100px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Title = styled.h1`
  font-size: 3em;
  text-align: center;
  color: #fff;
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

  h3 {
    font-size: 1.3em;
    color: #fff;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1em;
    color: #ccc;
    line-height: 1.5;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const ExploreButton = styled.button`
  padding: 1rem 2rem;
  background-color: #2BB9AE;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  transition: all 0.3s ease-in-out;
  margin-top: 2rem;

  &:hover {
    background-color: #27AA9A;
  }
`;

const Discover = () => {
  return (
    <Wrapper>
      <ContentContainer>
        <Title>Discover the Rich Cultural Tapestry of Madagascar</Title>
        <TextContainer>
          <TextColumn>
            <h3>Explore the Ethnic Groups</h3>
            <p>
              Learn about the fascinating ethnic groups that make up Madagascar's
              diverse population. Each group has its unique traditions,
              languages, and customs.
            </p>
          </TextColumn>
          <TextColumn>
            <h3>Immerse Yourself in Vibrant Traditions</h3>
            <p>
              Madagascar boasts a rich cultural heritage with vibrant
              festivals, traditional music and dance, and unique folklore and
              mythology. Experience the heart of Malagasy culture.
            </p>
          </TextColumn>
        </TextContainer>
        <ExploreButton>Explore Madagascar</ExploreButton>
      </ContentContainer>
    </Wrapper>
  );
};

export default Discover;
