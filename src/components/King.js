import React from 'react';
import styled from 'styled-components';

const rulers = [
  {
    name: "Andrianampoinimerina",
    reign: "1787 - 1810",
    image: "path/to/andrianampoinimerina.jpg",
    description:
      "Andrianampoinimerina was a powerful king who unified the central highlands of Madagascar, establishing the Kingdom of Imerina. He implemented strategic reforms, expanded trade, and is remembered for his cunning leadership and ambitious vision.",
  },
  {
    name: "Ranavalona I",
    reign: "1828 - 1861",
    image: "path/to/ranavalona_i.jpg",
    description:
      "Ranavalona I, also known as Ranavalona the Cruel, was a ruthless queen who fiercely protected Madagascar's independence. She implemented isolationist policies, modernized the military, and constructed elaborate palaces. However, her reign was marked by persecution and a decline in trade.",
  },
  // Add entries for other rulers
];

const RulerCard = ({ ruler }) => {
  return (
    <CardContainer>
      <Image src={ruler.image} alt={ruler.name} />
      <CardContent>
        <h3>{ruler.name}</h3>
        <p>{ruler.reign}</p>
        <p>{ruler.description}</p>
      </CardContent>
    </CardContainer>
  );
};

const RulersSection = () => {
  return (
    <RulersList>
      <h2>Rulers of Madagascar</h2>
      {rulers.map((ruler) => (
        <RulerCard key={ruler.name} ruler={ruler} />
      ))}
    </RulersList>
  );
};

const RulersList = styled.ul`
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

export default RulersSection;
