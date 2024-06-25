import React from 'react';
import styled from 'styled-components';
import Andrianampoinimerina from "../images/Andrianampoinimerina.jpg"
import darafify from "../images/darafify.jpg"

const mythsAndLegends = [
  {
    title: "The Legend of Andrianampoinimerina",
    image: Andrianampoinimerina,
    description:
      "Andrianampoinimerina was a powerful 18th-century king who unified much of the central highlands of Madagascar. Legend tells of his cunning strategies, magical powers, and unwavering determination in building his kingdom.",
  },
  {
    title: " The Trickster Spirit of Madagascar",
    image: darafify,
    description:
    "Madagascar's folklore boasts a captivating character named Darafify. Unlike the benevolent spirits of some cultures, Darafify is a mischievous trickster, renowned for his cunning pranks and playful chaos. Stories depict him as a clever and elusive figure who often outsmarts humans, leaving them bewildered and sometimes frustrated, but also undeniably entertained."

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
  width: 50%;
  max-width: 100%;
  margin-bottom: 0.5rem;
`;

const MythText = styled.div`
  h3 {
    margin-bottom: 0.5rem;
  }
`;

export default MythAndLegendSection;
