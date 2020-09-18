import React from 'react';
import { useDispatch } from 'react-redux';

import { saveAnswer } from '../../store/actions';

import './styles.scss';

interface questionResponse {
    question: string;
    answer: string;
}

const QuizComponent = () => {
    const dispatch = useDispatch();

    const saveQuizAnswer: any = (questionResponse: questionResponse) => {
        return dispatch(saveAnswer({ 
            question: questionResponse.question, 
            answer: questionResponse.answer 
        }))
    }

    return (
        <div className="quiz-container">
            <h3>What is your answer?</h3>
            <ul>
                <li onClick={() => saveQuizAnswer({question: 'What is your answer?', answer: 'A'})}>Answer A</li>
                <li onClick={() => saveQuizAnswer({question: 'What is your answer?', answer: 'B'})}>Answer B</li>
                <li onClick={() => saveQuizAnswer({question: 'What is your answer?', answer: 'C'})}>Answer C</li>
            </ul>
        </div>
    );
}

export default QuizComponent;