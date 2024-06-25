import React from 'react';
import styled from 'styled-components';
import {MapCard} from "./MapCard";

const MapDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
`;

const MapTitle = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  color: #333;
  text-align: center;
  margin-bottom: 1rem;
`;

export const MapDetails = () => {
  return (
    <MapDetailsContainer>
      <MapTitle>Explore Madagascar's Rich Ethnicity</MapTitle>
      <MapCard/>
    </MapDetailsContainer>
  );
};


