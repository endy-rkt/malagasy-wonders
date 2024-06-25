import React from 'react';
import { useNavigate } from 'react-router';
import styled from 'styled-components';

const DiscoverContainer = styled.div`
  max-height: calc(100vh - 100px);
  margin: 50px;
  @media (max-width: 768px) {
    margin: 20px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: auto;
  background-image: url("path/to/your/image.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 5px;
   width: 100%;
  height: 100%;
  background-color: #F0EEE8;
  @media (max-width: 768px) {
    width: 100%; /* Make content container full width on smaller screens */
    margin-top: 50px; /* Adjust top margin for smaller screens */
    flex-direction: column; /* Stack elements vertically on smaller screens */
  }
`;

const Title = styled.h1`
  font-size: 3em;
  text-align: center;
  color: #fff;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    font-size: 2em; /* Adjust font size for smaller screens */
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-wrap: wrap; /* Allow content to wrap on smaller screens */
  justify-content: space-between;
  margin-top: 2rem;
  width: 60%;

  @media (max-width: 768px) {
    width: 100%; /* Make text container full width on smaller screens */
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
    width: 100%; /* Make text columns full width on smaller screens */
    margin-bottom: 2rem; /* Add some spacing between columns */
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
  const navigate = useNavigate();

  const handleClickBtn = (e) =>{ 
    e.preventDefault();

    navigate("/history");
  }

  return (
    <DiscoverContainer>
      <Wrapper>
        <ContentContainer>
          <Title>Discover the Rich Cultural Tapestry of Madagascar</Title>
          <TextContainer>
            <TextColumn>
              <h3>Explore the Ethnic Groups</h3>
              <p>
                Learn about the fascinating ethnic groups that make up Madagascar's diverse population. Each group has its unique traditions, languages, and customs. Delve into the fascinating history of the Merina people, who established the powerful Kingdom of Imerina in the 16th century. Discover the influence of successive Malagasy kingdoms, each with its own rich heritage and legacies left by prominent rulers like Queens Ranavalona I and Ranavalona III.
              </p>
            </TextColumn>
            <TextColumn>
              <h3>Immerse Yourself in Vibrant Traditions</h3>
              <p>
                Madagascar boasts a rich cultural heritage that extends far beyond its diverse ethnic groups. Immerse yourself in vibrant festivals like Famadihana, the elaborate ceremony honoring ancestors. Be captivated by the soulful sounds of Salegy music and the mesmerizing movements of the traditional dance, the "Hira Gasy." Explore the island's unique folklore and mythology, filled with tales of legendary kings and queens who shaped the Malagasy identity.
              </p>
            </TextColumn>
          </TextContainer>
          <ExploreButton onClick={(e)=>handleClickBtn(e)}>Explore Madagascar History</ExploreButton>
        </ContentContainer>
      </Wrapper>
    </DiscoverContainer>
  );
};


// Existing styles with media queries for 768px screens

// Additional media queries for smaller screens:

const TextContent = styled.p`  /* Combine headings and paragraph styles */
  font-size: 1em;
  color: #ccc;
  line-height: 1.5;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 0.8em; /* Adjust font size for even smaller screens */
  }
`;

export default Discover;
