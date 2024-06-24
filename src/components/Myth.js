import React from 'react';
import styled from 'styled-components';

const mythsAndLegends = [
  {
    title: "The Legend of Andrianampoinimerina",
    image: "path/to/andrianampoinimerina.jpg",
    description:
      "Andrianampoinimerina was a powerful 18th-century king who unified much of the central highlands of Madagascar. Legend tells of his cunning strategies, magical powers, and unwavering determination in building his kingdom.",
  },
  {
    title: "The Tale of Babakoto",
    image: "path/to/babakoto.jpg",
    description:
      "Babakoto is a mischievous trickster spirit in Malagasy folklore. Stories depict him as a clever prankster who often outsmarts humans and brings both chaos and humor to their lives.",
  },
  // Add more myths and legends here
];

const MythAndLegendSection = () => {
  return (
    <MythContainer>
      <h2>Myths & Legends</h2>
      <MythList>
        {mythsAndLegends.map((myth) => (
          <MythCard key={myth.title}>
            <MythImage src={myth.image} alt={myth.title} />
            <MythText>
              <h3>{myth.title}</h3>
              <p>{myth.description}</p>
            </MythText>
          </MythCard>
        ))}
      </MythList>
    </MythContainer>
  );
};

const MythContainer = styled.div`
  text-align: center;
  padding: 2rem;
`;

const MythList = styled.ul`
  display: grid; /* Use grid layout for side-by-side display */
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); /* Adjust columns and size */
  grid-gap: 1rem;
  list-style: none;
  padding: 0;
  margin: 1rem 0;
`;

const MythCard = styled.li`
  background-color: #f5f5f5; /* Light background color */
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Subtle shadow */
  padding: 1rem;
`;

const MythImage = styled.img`
  width: 100%;
  max-width: 100%; /* Ensure image scales down on smaller screens */
  margin-bottom: 0.5rem;
`;

const MythText = styled.div`
  h3 {
    margin-bottom: 0.5rem;
  }
`;

export default MythAndLegendSection;
