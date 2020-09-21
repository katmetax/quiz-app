import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { saveAnswer } from '../../store/actions';

import './styles.scss';

interface questionResponse {
    question: string;
    answer: string;
}

// TODO: Pass down as props
const questionData = [
    {
        question: 'What is the capital of Canada?',
        answer: 'Vancouver'
    },{
        question: 'What is the capital of Canada?',
        answer: 'Ottawa'
    },
    {
        question: 'What is the capital of Canada?',
        answer: 'Toronto'
    }
];

const QuizComponent = (onClick: any) => {
    const dispatch = useDispatch();
    const [currentIndex, setIndex] =  useState(-1);

    const clickHandler = (questionResponse: questionResponse, index: number) => {
        selectAnswer(questionResponse);
        setIndex(index);
    }

    const selectAnswer: any = (questionResponse: questionResponse) => {
        return dispatch(saveAnswer({ 
            question: questionResponse.question, 
            answer: questionResponse.answer 
        }))
    };

    return (
        <div className="quiz-container" data-testid="question-root">
            <h3>What is the capital of Canada?</h3>
            <ul data-testid="answers-list">
                {
                    questionData.map((item, index) => {
                        return <li key={index} className={currentIndex === index ? 'active' : ''} onClick={() => clickHandler(item, index)} data-testid="answers-option">{item.answer}</li>
                    })
                }
            </ul>
        </div>
    );
}

export default QuizComponent;