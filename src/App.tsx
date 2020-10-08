import React from 'react';
import './App.scss';
import QuizComponent from './components/quizComponent';

const questionData = [
  {
      question: 'What is the capital of Canada?',
      answers: ['Vancouver', 'Ottawa', 'Toronto']
  },
  {
      question: 'Which planet in our solar system has the most amount of moons?',
      answers: ['Saturn', 'Jupiter', 'Neptune']
  },
  {
    question: 'What programming language was named after a TV show?',
    answers: ['Ruby', 'Python', 'Elixir']
}
];

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Quiz App</h1>
        <QuizComponent questionData={questionData} />
      </header>
    </div>
  );
}

export default App;
