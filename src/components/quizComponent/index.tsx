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
    const [pageNumber, setPageNumber] = useState(0);

    const clickHandler = (question: string, answer: string, answerIndex: number, questionNo: number) => {
        selectedAnswer(question, answer, questionNo);
        setIndex(answerIndex);
    }

    const selectedAnswer: any = (question: string, answer: string, questionNo: number) => {
        return dispatch(saveAnswer({ 
            question, 
            answer,
            questionNo
        }))
    };

    const nextBtnClick = () => {
        setPageNumber(pageNumber + 1);
        setIndex(-1);
    };

    const backBtnClick = () => {
        setPageNumber(pageNumber - 1);
        setIndex(-1);
    };

    return (
        <div className="quiz-container" data-testid="question-root">
            {
                questionData.map((item: any, i: number) => {
                    if (i === pageNumber) {
                    return (
                        <>
                        <h3>{i + 1}. {item.question}</h3>
                        <ul data-testid="answers-list">
                        { 
                            item.answers.map((answer: any, index: any) => {
                                return (
                                <li key={index} className={currentIndex === index ? 'active' : ''} onClick={() => clickHandler(item.question, answer, index, i)} data-testid="answers-option">{answer}</li>
                                )
                            })
                        }
                        </ul>
                        <button onClick={() => backBtnClick()}>Back</button>
                        <button onClick={() => nextBtnClick()}>Next</button>
                        </>
                    )
                    }

                    return null;
                })
            }
        </div>
    );
}

export default QuizComponent;
