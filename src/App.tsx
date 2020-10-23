import React from 'react';
import './App.scss';
import QuizComponent from './components/quizComponent';
import { questionData } from './data/questionData';

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
