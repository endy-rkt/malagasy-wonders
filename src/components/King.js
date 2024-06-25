import React from 'react';
import styled from 'styled-components';
import  Andrianampoinimerina from "../images/Andrianampoinimerina.jpg"
import  Ranavalona1 from "../images/Ranavalona_I.jpg"

const rulers = [
  {
    name: "Andrianampoinimerina",
    reign: "1787 - 1810",
    image: Andrianampoinimerina,
    description:
      "Andrianampoinimerina was a powerful king who unified the central highlands of Madagascar, establishing the Kingdom of Imerina. He implemented strategic reforms, expanded trade, and is remembered for his cunning leadership and ambitious vision.",
  },
  {
    name: "Ranavalona I",
    reign: "1828 - 1861",
    image: Ranavalona1,
    description:
      "Ranavalona I, also known as Ranavalona the Cruel, was a ruthless queen who fiercely protected Madagascar's independence. She implemented isolationist policies, modernized the military, and constructed elaborate palaces. However, her reign was marked by persecution and a decline in trade.",
  },
  // Add entries for other rulers
];

const RulerCard = ({ ruler }) => {
  return (
    <CardContainer>
      <img src={ruler.image} alt={ruler.name} />
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
      <Title>Rulers of Madagascar</Title>
      {rulers.map((ruler) => (
        <RulerCard key={ruler.name} ruler={ruler} />
      ))}
    </RulersList>
  );
};


const Title = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  color: #333;
  text-align: center;
  margin-bottom: 1rem;
`;

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
  img{
    width: 150px;
  height: auto;
  margin-bottom: 0.5rem;
  border-radius: 50%; /* Circular image */
  }
`;



const CardContent = styled.div`
  text-align: center;
`;

export default RulersSection;
