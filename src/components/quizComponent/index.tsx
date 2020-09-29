import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { saveAnswer } from '../../store/actions';

import './styles.scss';

interface quizComponentProps {
    questionData: Array<questionData>;
}

interface questionData {
    question: string;
    answers: string[];
}

const QuizComponent = ( { questionData }: quizComponentProps ) => {
    const dispatch = useDispatch();
    const [currentIndex, setIndex] =  useState(-1);

    const clickHandler = (question: string, answer: string, index: number) => {
        selectedAnswer(question, answer);
        setIndex(index);
    }

    const selectedAnswer: any = (question: string, answer: string) => {
        return dispatch(saveAnswer({ 
            question, 
            answer
        }))
    };

    return (
        <div className="quiz-container" data-testid="question-root">
            {
                questionData.map((item: any, i: any) => {
                    return (
                        <>
                        <h3>{i + 1}. {item.question}</h3>
                        <ul data-testid="answers-list">
                        { 
                            item.answers.map((answer: any, index: any) => {
                                return (
                                <li key={index} className={currentIndex === index ? 'active' : ''} onClick={() => clickHandler(item.question, answer, index)} data-testid="answers-option">{answer}</li>
                                )
                            })
                        }
                        </ul>
                        </>
                    )
                })
            }
        </div>
    );
}

export default QuizComponent;