import React from 'react';
import { useSelector } from 'react-redux';
import './styles.scss';

interface userQuizResultsInterface {
    result: string;
    correctAnswersNum: number;
    allQuestionsNum: number;
}

const ResultsPage = () => {
    const quizState = useSelector(state => state);
    
    const userQuizResults = ():userQuizResultsInterface => {
        const totalQuestionNum = (quizState as any).quiz.length;
        const correctAnswerNum = (quizState as any).quiz.filter((quizItems:any) => quizItems.answeredCorrectly === true).length;
        const halfOrMoreCorrectAnswers = (correctAnswerNum >= (totalQuestionNum / 2));
        const result = halfOrMoreCorrectAnswers ? 'Won' : 'Lost';

        return {
            result: result,
            correctAnswersNum: correctAnswerNum,
            allQuestionsNum: totalQuestionNum
        }
    }

    const { result, correctAnswersNum, allQuestionsNum } = userQuizResults();
    
    return (
        <>
        <h1>You {result}!</h1>
        <p>You got {correctAnswersNum} out of {allQuestionsNum} questions right!</p>
        </>
        );
    }
    
    export default ResultsPage;
    