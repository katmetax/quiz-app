import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.scss';
import QuizComponent from './components/quizComponent';
import ResultsPage from './components/resultsPage';
import { questionData } from './data/questionData';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
          <Switch>
            <Route path="/" exact render={(props) => (
              <QuizComponent {...props} questionData={questionData} />
            )} />
            <Route path="/results-page" component={ResultsPage} />
          </Switch>
      </header>
    </div>
  );
}

export default App;
