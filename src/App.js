import React, { useState } from 'react';
import './App.css';

function App() {
  //variables
  let testQuestions = [
    {
      questionText: 'What is the capital of France?',
      answerOptions: [
        { answerText: 'New York', isCorrect: false },
        { answerText: 'London', isCorrect: false },
        { answerText: 'Paris', isCorrect: true },
        { answerText: 'Berlin', isCorrect: false }
      ]
    },
    {
      questionText: 'What is CEO of Tesla?',
      answerOptions: [
        { answerText: 'Jef Bezos', isCorrect: false },
        { answerText: 'Elon Musk', isCorrect: true },
        { answerText: 'Bill Gates', isCorrect: false },
        { answerText: 'Tony Stark', isCorrect: false }
      ]
    },
    {
      questionText: 'The iphone was created by which compony?',
      answerOptions: [
        { answerText: 'Apple', isCorrect: true },
        { answerText: 'intel', isCorrect: false },
        { answerText: 'Amazon', isCorrect: false },
        { answerText: 'Microsoft', isCorrect: false }
      ]
    },
    {
      questionText: 'How many Harry Potter books are there?',
      answerOptions: [
        { answerText: '1', isCorrect: false },
        { answerText: '4', isCorrect: false },
        { answerText: '6', isCorrect: false },
        { answerText: '7', isCorrect: true },
      ]
    },
  ]
  //states 
  const [questions] = useState(testQuestions);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  
  //functions 
  const clickHandler = (isCorrect) =>{
    if(isCorrect){
      setScore(score+1);
    }

    if (currentQuestion === questions.length-1){
      setShowScore(true);
    }else{
      setCurrentQuestion(currentQuestion +1);
    }
  }

  //JSX
  return (
    <div className="app">
      <div className="wrapper">
        {showScore ? (<div className='score-section'>
          You scored {score} out of {questions.length}
        </div>) :
          (<React.Fragment>
            <div className="question-section">
              <div className="question-count">
                <span>
                  Question {currentQuestion + 1}
                </span>/{questions.length}
              </div>

              <div className="question-text">
                {questions[currentQuestion].questionText}
              </div>
            </div>

            <div className="answer-section">
              <div className="buttons">
                {questions[currentQuestion].answerOptions.map(x =>
                  <button key={x.answerText}
                  onClick={() => clickHandler(x.isCorrect)}>
                    {x.answerText}
                  </button>)}
              </div>
            </div>

          </React.Fragment>)}
      </div>
    </div>
  )
}

export default App