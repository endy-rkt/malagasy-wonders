import React, { useState } from 'react';
import styled from 'styled-components';

const proverbs = [
  {
    id: 1,
    proverb: "Vao maraina no mahafantatra ny hasasarana ny mandeha lavitra",
    meaning: "Only in the morning does the one who travels far know the difficulty.",
    options: [
      "This proverb is about patience.",
      "This proverb is about planning.",
      "This proverb is about perseverance.",
    ],
  },
  {
    id: 2,
    proverb: "Ny hendry tsy mandeha lavitra mitady fahavalo, fa ny adala no manao izany",
    meaning: "The wise man does not travel far to seek an enemy, but the fool does so.",
    options: [
      "This proverb is about choosing battles wisely.",
      "This proverb is about the importance of travel.",
      "This proverb is about the dangers of the unknown.",
    ],
  },
  // Add more proverbs here with their IDs, proverbs, meanings, and options
];

const QuizSection = () => {
  const [isQuizStarted, setIsQuizStarted] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [score, setScore] = useState(0);

  const startQuiz = () => {
    setIsQuizStarted(true);
    setCurrentQuestionIndex(0);
    setUserAnswers([]);
    setScore(0); // Reset score on starting a new quiz
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < proverbs.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handleAnswerSelect = (optionIndex) => {
    const newAnswers = [...userAnswers];
    newAnswers[currentQuestionIndex] = optionIndex;
    setUserAnswers(newAnswers);
  };

  const calculateScore = () => {
    let totalScore = 0;
    userAnswers.forEach((answerIndex, questionIndex) => {
      if (answerIndex === proverbs[questionIndex].options.indexOf("Correct)")) {
        totalScore++;
      }
    });
    setScore(totalScore);
  };

  const renderQuizContent = () => {
    if (!isQuizStarted) {
      return (
        <Container>
          <h2>Take a Quiz!</h2>
          <button onClick={startQuiz}>Start Quiz</button>
        </Container>
      );
    } else if (currentQuestionIndex === proverbs.length) {
      calculateScore();
      return (
        <Container>
          <h2>Quiz Results</h2>
          <p>Your score: {score} out of {proverbs.length}</p>
          <button onClick={() => setIsQuizStarted(false)}>Restart Quiz</button>
        </Container>
      );
    } else {
      const currentQuestion = proverbs[currentQuestionIndex];
      return (
        <Container>
          <h2>Question {currentQuestionIndex + 1}</h2>
          <p>{currentQuestion.proverb}</p>
          <ul>
            {currentQuestion.options.map((option, index) => (
              <li key={index}>
                <input
                  type="radio"
                  id={`option-${index}`}
                  name="answer"
                  value={index}
                  checked={userAnswers[currentQuestionIndex] === index}
                  onChange={() => handleAnswerSelect(index)}
                    />
                    <label for={`option-${index}`}>{option}</label>
                  </li>
                ))}
              </ul>
              <button
                disabled={currentQuestionIndex === proverbs.length - 1}
                onClick={handleNextQuestion}
              >
                Next Question
              </button>
            </Container>
          );
        }
      };
    
      return renderQuizContent();
    };
    
    const QuizContainer = styled.div`
    text-align: center;
    padding: 2rem;

    /* Center the content horizontally and vertically */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    /* Ensure content fills viewport height and has a minimum width */
    min-height: 100vh;
    min-width: 400px; /* Adjust as desired for minimum width */
  `;
    
    const Container = styled.div`
  margin: 100px auto;
  margin-bottom:400px;  /* Centers the container horizontally and vertically */
  display: flex;
  gap: 2rem;
  flex-direction: column;  /* Stacks elements vertically */
  align-items: center;   /* Centers elements horizontally within the container */
  /* No need for align-content: center; in this case */
  justify-content: center;  /* Centers elements vertically within the container */
`;

    export default QuizSection;
    