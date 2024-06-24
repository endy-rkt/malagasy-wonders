import React, { useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 100vh;
  background-color: #f0eeee;
  padding: 2rem;
`;

const Title = styled.h1`
  font-size: 2.5em;
  margin-bottom: 2rem;
`;

const QuestionContainer = styled.div`
  background-color: #fff;
  padding: 1rem;
  border-radius: 5px;
  margin-bottom: 2rem;
`;

const Question = styled.p`
  font-size: 1.1em;
  margin-bottom: 0.5rem;
`;

const OptionsContainer = styled.div`;
`;

const Option = styled.label`
  display: block;
  font-size: 1em;
  margin-bottom: 1rem;
  cursor: pointer;

  input[type="radio"] {
    margin-right: 1rem;
  }
`;

const Button = styled.button`
  padding: 1rem 2rem;
  background-color: #2bb9ae;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: #27aa9a;
  }
`;

const Feedback = styled.p`
  font-size: 1.1em;
  margin-top: 1rem;
  color: #2bb9ae;
`;

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [feedback, setFeedback] = useState(null);
  const [score, setScore] = useState(0);

  const questions = [
    {
      category: 'Proverb',
      question: 'Volana tsara, tsy very maina',
      answer: 'A good word never dries out.',
      options: [
        'The early bird gets the worm.',
        'A good word never dries out.',
        'There is no place like home.',
      ],
    },
    {
      category: 'History',
      question: 'What kingdom was the first major Malagasy state?',
      answer: 'The Kingdom of Imerina',
      options: [
        'The Kingdom of Sakalava',
        'The Kingdom of Betsimisaraka',
        'The Kingdom of Imerina',
      ],
    },
    {
      category: 'Folklore',
      question: 'What mythical creature is said to guard the forests of Madagascar?',
      answer: 'The Vazimba',
      options: [
        'The Fanaloka',
        'The Aye-Aye',
        'The Vazimba',
      ],
    },
    {
      category: 'Myth',
      question: 'According to Malagasy mythology, how were the stars created?',
      answer: 'From the tears of the Creator',
      options: [
        'From the sparks of a celestial blacksmith',
        'From the laughter of the ancestors',
        'From the tears of the Creator',
      ],
    },
  ];

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
    setShowFeedback(false);
  };

  const handleSubmit = () => {
    if (selectedOption) {
      const correctAnswer = questions[currentQuestion].answer;
      setShowFeedback(true);
      setFeedback(selectedOption === correctAnswer ? 'Correct!' : 'Incorrect. The answer is: ' + correctAnswer);
      if (selectedOption === correctAnswer) {
        setScore(score + 1);
      }
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestion + 1 < questions.length) {
		setCurrentQuestion(currentQuestion + 1);
		setSelectedOption(null);
		setShowFeedback(false);
	  } else {
		// All questions answered, show final score
		setFeedback('You finished the quiz! Your score is ' + score + ' out of ' + questions.length);
	  }
	};
  
	return (
	  <Wrapper>
		<Title>Malagasy Quiz</Title>
		{currentQuestion < questions.length ? (
		  <>
			<QuestionContainer>
			  <Question>
				{questions[currentQuestion].category} - {questions[currentQuestion].question}
			  </Question>
			  <OptionsContainer>
				{questions[currentQuestion].options.map((option, index) => (
				  <Option key={index}>
					<input
					  type="radio"
					  id={`option${index}`}
					  name="answer"
					  value={option}
					  checked={selectedOption === option}
					  onChange={handleOptionChange}
					/>
					{option}
				  </Option>
				))}
			  </OptionsContainer>
			</QuestionContainer>
			{showFeedback && <Feedback>{feedback}</Feedback>}
			<Button onClick={handleSubmit}>Submit Answer</Button>
		  </>
		) : (
		  <Feedback>{feedback}</Feedback>
		)}
	  </Wrapper>
	);
  };
  
  export default Quiz;
  