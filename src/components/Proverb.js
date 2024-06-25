import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const proverbs = [
  { id: 1, proverb: "Vao maraina no mahafantatra ny hasasarana ny mandeha lavitra", meaning: "Only in the morning does the one who travels far know the difficulty." },
  { id: 2, proverb: "Ny hendry tsy mandeha lavitra mitady fahavalo, fa ny adala no manao izany", meaning: "The wise man does not travel far to seek an enemy, but the fool does so." },
  { id: 3, proverb: "Ny hendry tsy mandeha lavitra mitady fahavalo, fa ny adala no manao izany", meaning: "The wise man does not travel far to seek an enemy, but the fool does so." },
  // Add more proverbs here with their IDs, proverbs, and meanings
];

const ProverbSection = () => {
  const [currentProverb, setCurrentProverb] = useState(1); // Stores the ID of the currently displayed proverb

  useEffect(() => {
    const proverbIndex = proverbs.findIndex((p) => p.id === currentProverb);
    document.title = `Malagasy Proverb: ${proverbs[proverbIndex].proverb}`; // Update document title
  }, [currentProverb]); // Add currentProverb as a dependency

  const handleNext = () => {
    const nextIndex = currentProverb + 1;
    setCurrentProverb(proverbs[nextIndex].id);
  };

  const handlePrev = () => {
    const prevIndex = currentProverb - 1;
    setCurrentProverb(proverbs[prevIndex].id);
  };

  const currentProverbData = proverbs.find((p) => p.id === currentProverb);

  return (
    <ProverbContainer>
      <h2>Proverb of the Day</h2>
      <ProverbText>
        <p>{currentProverbData.proverb}</p>
        <p className="meaning">Meaning: {currentProverbData.meaning}</p>
      </ProverbText>
      <Pagination>
        <button disabled={currentProverb === 1} onClick={handlePrev}>
          Previous
        </button>
        <button disabled={currentProverb === proverbs.length} onClick={handleNext}>
          Next
        </button>
      </Pagination>
    </ProverbContainer>
  );
};

const ProverbContainer = styled.div`
  text-align: center;
  padding: 2rem;
`;

const ProverbText = styled.div`
  margin: 1rem 0;
  p.meaning {
    font-style: italic;
    margin-top: 0.5rem;
  }
`;

const Pagination = styled.div`
  display: flex;
  justify-content: center;
  button {
    margin: 0.5rem;
    padding: 0.5rem 1rem;
    border: 1px solid #ddd;
    border-radius: 4px;
    cursor: pointer;
  }

  button:disabled {
    opacity: 0.5;
    cursor: default;
  }
`;

export default ProverbSection;
