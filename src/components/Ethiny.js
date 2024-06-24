import React from 'react';
import styled from 'styled-components';

const ethnicities = [
  {
    name: "Merina",
    location: "Central Highlands",
    image: "path/to/merina.jpg",
    traditions: [
      "Ancestral veneration (Famadihana)",
      "Rice cultivation and elaborate rice ceremonies (Vary Sawa)",
      "Expertise in metalworking and crafts",
    ],
    description:
      "The Merina are the largest ethnic group in Madagascar, inhabiting the central highlands. They are known for their rich history, including the powerful Kingdom of Imerina. Merina culture emphasizes respect for ancestors, elaborate rice ceremonies, and skilled craftsmanship.",
  },
  {
    name: "Betsileo",
    location: "South-central Highlands",
    image: "path/to/betsileo.jpg",
    traditions: [
      "Zebu cattle herding",
      "Unique tomb architecture (Trano Silava)",
      "Skillful wood carving and weaving",
    ],
    description:
      "The Betsileo people reside in the south-central highlands. They are known for their expertise in zebu cattle herding, intricate tomb designs, and beautiful wood carvings and woven textiles.",
  },
  // Add entries for other ethnicities
];

const EthnicityCard = ({ ethnicity }) => {
  return (
    <CardContainer>
      <Image src={ethnicity.image} alt={ethnicity.name} />
      <CardContent>
        <h3>{ethnicity.name}</h3>
        <p>Location: {ethnicity.location}</p>
        <h4>Traditions</h4>
        <ul>
          {ethnicity.traditions.map((tradition) => (
            <li key={tradition}>{tradition}</li>
          ))}
        </ul>
        <p>{ethnicity.description}</p>
      </CardContent>
    </CardContainer>
  );
};

const EthnicitiesSection = () => {
  return (
    <EthnicitiesList>
      <h2>Ethnicities of Madagascar</h2>
      {ethnicities.map((ethnicity) => (
        <EthnicityCard key={ethnicity.name} ethnicity={ethnicity} />
      ))}
    </EthnicitiesList>
  );
};

const EthnicitiesList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 1rem 0;
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-bottom: 1rem;
  padding: 1rem;
`;

const Image = styled.img`
  width: 150px;
  height: auto;
  margin-bottom: 0.5rem;
  border-radius: 50%; /* Circular image */
`;

const CardContent = styled.div`
  text-align: center;
`;

export default EthnicitiesSection;
