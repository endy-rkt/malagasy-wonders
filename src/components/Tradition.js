import React from 'react';
import styled from 'styled-components';
import kabary from "../images/kabary.jpg"
import famadihana from "../images/famadihana.jpg"

const DiscoverTradition = () => {
  return (
    <TraditionContainer>
      <h2>Discover Malagasy Traditions</h2>
      <TraditionList>
        <TraditionItem>
          <TraditionImage src={famadihana} alt="Famadihana Ceremony" />
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
          <TraditionImage src={kabary} alt="Salegy Dancers" />
          <TraditionText>
            <h3>Kabary malagasy</h3>
            <p>
            Kabary Malagasy, translating to "speech" or "debate" in Malagasy, transcends the realm of everyday conversation. It's a captivating art form deeply woven into the cultural fabric of Madagascar, particularly in the central region of Analamanga.

More Than Conversation: Kabary isn't just a chat. It's a meticulously crafted performance. Skilled orators, called "mpikabary," weave a tapestry of words, proverbs, metaphors, and captivating storytelling. These elements often dance alongside the rhythmic melodies of traditional instruments like the 'valiha' (a zither-like instrument) and the pulsating beats of the 'sodina' (drum).
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
