import React from 'react';
import styled from 'styled-components';

const DiscoverTradition = () => {
  return (
    <TraditionContainer>
      <h2>Discover Malagasy Traditions</h2>
      <TraditionList>
        <TraditionItem>
          <TraditionImage src="path/to/famadihana.jpg" alt="Famadihana Ceremony" />
          <TraditionText>
            <h3>Famadihana - The Turning of the Bones</h3>
            <p>
              Famadihana is a unique Malagasy tradition practiced by many ethnic groups
              across the island. It involves the exhumation of the bodies of deceased
              relatives every few years, followed by a ceremony to honor the dead,
              reburial, and celebration with family and friends. This tradition is
              believed to strengthen ties between the living and the dead and ensure
              the well-being of both.
            </p>
          </TraditionText>
        </TraditionItem>
        <TraditionItem>
          <TraditionImage src="path/to/image2.jpg" alt="Salegy Dancers" />
          <TraditionText>
            <h3>Salegy - The Rhythm of Life</h3>
            <p>
              Salegy is a vibrant music and dance tradition originating from the
              northern coast of Madagascar. It features a distinctive rhythm played
              on the 'maravany' (a bamboo xylophone) and the 'katy' (a ribbed gourd
              instrument), accompanied by energetic dancing and lively singing.
              Salegy is a celebration of life, community, and cultural identity.
            </p>
          </TraditionText>
        </TraditionItem>
      </TraditionList>
    </TraditionContainer>
  );
};

const TraditionContainer = styled.div`
  text-align: center;
  padding: 2rem;
`;

const TraditionList = styled.ul`
  display: flex; /* Change to flex for side-by-side display on larger screens */
  flex-wrap: wrap;
  justify-content: space-around;
  list-style: none;
  padding: 0;
  margin: 1rem 0;
`;

const TraditionItem = styled.li`
  width: 400px; /* Adjust width as needed */
  margin: 1rem;
`;

const TraditionImage = styled.img`
  width: 100%;
  max-width: 100%; /* Ensure image scales down on smaller screens */
  margin-bottom: 1rem;
`;

const TraditionText = styled.div`
  padding: 1rem;
`;

export default DiscoverTradition;
