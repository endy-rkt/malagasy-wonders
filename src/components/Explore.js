import React from 'react';
import styled from 'styled-components';
import test from "../images/champ.jpg"
import { useNavigate } from 'react-router';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: auto;
 `;

 const ContentContainer = styled.div`
 display: flex;
 flex-direction: column;
 align-items: center;
 width: 100%;
 height: auto;
 background-image: url(${test});
 background-repeat: no-repeat;
 background-size: cover;
 background-position: center;
 
 padding: 2rem;
 border-radius: 10px;
 @media (max-width: 768px) {
   width: 100%;
 }
`;

const Title = styled.h1`
  font-size: 3em;
  text-align: center;
  color: #2BB9AE; /* Primary brand color */
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
`;

const TextContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 2rem;
  width: 60%;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const TextColumn = styled.div`
  width: 45%;
  margin-bottom: 2rem;
  h3 {
    font-size: 1.3em;
    color: #1BB9AE; /* Primary brand color */
    margin-bottom: 1rem;
  }

  p {
    font-size: 1em;
    color: white;
    line-height: 1.5;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
`;

const ExploreButton = styled.button`
  padding: 1rem 2rem;
  background-color: #2BB9AE; /* Primary brand color */
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: #27AA9A;
  }
`;

const LearnMoreButton = styled.button`
  padding: 1rem 2rem;
  background-color: #fff; /* White background */
  color: #2BB9AE; /* Primary brand color */
  border: 1px solid #2BB9AE; /* Primary brand color border */
  border-radius: 5px;
  cursor: pointer;
  margin-left: 1rem;
  transition: all 0.3s ease-in-out;
  &:hover {
    background-color: #EAEAEA;
  }
`;



const Explore = () => {
  const navigate = useNavigate();

  const handleClickBtn = e=>{
    e.preventDefault();

    navigate("/culture");
  }

  return (
    <Wrapper>
      <ContentContainer>
        <Title>Delve into the Heart of Malagasy Culture</Title>
        <TextContainer>
          <TextColumn>
            <h3>Uncover a Tapestry of Traditions</h3>
            <p>
              Madagascar boasts a rich cultural heritage filled with vibrant traditions passed down through generations. Witness the unique Famadihana ceremony, where ancestors are exhumed and celebrated in a lively festival. Explore the captivating world of Malagasy folklore, where tales of benevolent Vazimba spirits and mischievous tricksters like Iarivo, the fox-like creature, come alive. Immerse yourself in the wisdom of Malagasy proverbs, like "Ny henatra no mahafoy lalana" (Even the wisest person can lose their way), reflecting the importance of learning throughout life.
            </p>
          </TextColumn>
          <TextColumn>
            <h3>Discover the Power of Ancestral Beliefs</h3>
            <p>
              Ancestral reverence plays a vital role in Malagasy culture. The elaborate "Trano Manga" (ancestral houses) serve as a connection between the living and the departed. Witness the intricate wood carvings and vibrant colors adorning these houses, each detail holding a symbolic meaning. Explore the significance of "Fady" (taboos) that govern everyday life, reflecting the deep respect for ancestors and the natural world.
            </p>
          </TextColumn>
        </TextContainer>
        <ButtonContainer>
          <ExploreButton onClick={(e)=>handleClickBtn(e)}>Explore Malagasy Culture</ExploreButton>
        </ButtonContainer>
      </ContentContainer>
    </Wrapper>
  );
};


export default Explore;
