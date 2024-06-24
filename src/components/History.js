import React from 'react';
import styled from 'styled-components';
//import MadagascarMap from './MadagascarMap'; // Import your MadagascarMap component

const historyData = [
  // Add history data objects here
  {
    title: "Pre-Colonial Madagascar",
    description:
      "Madagascar was first inhabited by Southeast Asians around 2000 years ago. Early kingdoms emerged, with powerful rulers like those of the Sakalava people.",
  },
  {
    title: "The Kingdom of Imerina",
    description:
      "In the 18th century, Andrianampoinimerina unified the central highlands, forming the powerful Kingdom of Imerina. His descendants expanded the kingdom's reach.",
  },
  // Add entries for other periods with descriptions
];

const HistorySection = () => {
  return (
    <HistoryContainer>
      <HistoryMap>
        {/* <MadagascarMap /> */}
      </HistoryMap>
      <HistoryContent>
        <h2>History of Madagascar</h2>
        <p>{historyData[0].description}</p>
        <h3>Timeline</h3>
        <ul>
          {historyData.map((period) => (
            <li key={period.title}>
              <h4>{period.title}</h4>
              <p>{period.description}</p>
            </li>
          ))}
        </ul>
      </HistoryContent>
    </HistoryContainer>
  );
};

const HistoryContainer = styled.div`
  display: flex;
  flex-wrap: wrap; /* Allow content to wrap on smaller screens */
`;

const HistoryMap = styled.div`
  flex: 0 0 50%;
  padding: 1rem;

  @media (max-width: 768px) {
    /* Responsive styles for smaller screens */
    flex: 1 0 100%; /* Map takes full width */
    margin-bottom: 1rem;
  }
`;

const HistoryContent = styled.div`
  flex: 1 1 auto;
  padding: 1rem;
`;

export default HistorySection;
