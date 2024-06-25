import React from 'react';
import { useNavigate } from 'react-router';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: auto;
  padding: 10px 10px;
  background-color: #F0EEE8;
  background-image: url("path/to/your/image.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  border:5px
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    font-size: 3em;
    text-align: center;
    color: #fff;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
  

  h2 {
    font-size: 1.5em;
    text-align: center;
    color: #fff;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
  }
`;

const ButtonContainer = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  button {
    padding: 1rem 2rem;
	margin-left: 2rem;
    background-color: #2BB9AE;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-weight: bold;
    transition: all 0.3s ease-in-out;

    &:hover {
      background-color: #27AA9A;
    }
  }
`;

const ExploreButton = styled.button`
  padding: 1rem 2rem;
  background-color: #F0EEE8;
  color: #2BB9AE;
  border: 1px solid #2BB9AE;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  transition: all 0.3s ease-in-out;
  margin-left: 1rem;

  &:hover {
    background-color: #EAEAEA;
  }
`;

const Hero = () => {
  const navigate = useNavigate();

  const handleClickBtn = e =>{
    e.preventDefault();

    navigate("/quizz");
  }

  return (
    <Wrapper>
      <TitleContainer>
        <h1>Test Your Madagascar Knowledge!</h1>
        <h2>Ready to dive into Madagascar's rich culture?</h2>
      </TitleContainer>
      <ButtonContainer>
        <ExploreButton to="/quiz" onClick={(e)=>handleClickBtn(e)}>Take the Quiz</ExploreButton>
      </ButtonContainer>
    </Wrapper>
  );
};


export default Hero;
