import React, { FunctionComponent } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.scss";
import QuizComponent from "./components/quizComponent";
import ResultsPage from "./components/resultsPage";
import { quizData } from "./data/quizData";

const App: FunctionComponent = () => {
    return (
        <div className="App">
            <header className="App-header">
                <Switch>
                    <Route
                        path="/"
                        exact
                        render={(props) => (
                            <QuizComponent {...props} questionData={quizData} />
                        )}
                    />
                    <Route path="/results-page" component={ResultsPage} />
                </Switch>
            </header>
        </div>
    );
};

export default App;
