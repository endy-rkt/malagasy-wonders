import React from 'react'
import Map from './Map'
import Legend from './Legend'
import styled from 'styled-components'

const MapCardContent = styled.div`
    display:flex;
    justify-content: space-between;
`;

export const MapCard = () => {
  return (
    <MapCardContent>
        <Legend/>
        <Map/>
    </MapCardContent>
  )
}

