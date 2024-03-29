import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

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
    const quizState = useSelector(state => state);
    
    const clickHandler = (question: string, answer: string, answerIndex: number, questionNo: number, correctAnswer: string) => {
        const answeredCorrectly = correctAnswer === answer;
        selectedAnswer(question, answer, questionNo, answerIndex, answeredCorrectly);
        setIndex(answerIndex);
    }
    
    const selectedAnswer = (question: string, answer: string, questionNo: number, answerIndex: number, answeredCorrectly: boolean) => {
        return dispatch(saveAnswer({ 
            question, 
            answer,
            questionNo,
            answerIndex,
            answeredCorrectly
        }))
    };
    
    const getSelectedIndex = (questionNo: number) => {
        const questionSaved = (quizState as any).quiz.filter((quizItems:any) => quizItems.questionNo === questionNo)[0];
        if ( questionSaved ) {
            return setIndex(questionSaved.answerIndex);
        }
        return setIndex(-1);
    };
    
    const btnClick = (context: string, questionNo: number) => {
        setPageNumber(pageNumber + (context === 'next' ? + 1 :  -1));
        getSelectedIndex(questionNo);
    };
    
    return (
        <div>
        <h1>Quiz App</h1>
        <div className="quiz-container" data-testid="question-root">
        {
            questionData.map((item: any, questionIndex: number) => {
                if (questionIndex === pageNumber) {
                    return (
                        <div key={questionIndex}>
                        <h3>{questionIndex + 1}. {item.question}</h3>
                        <ul data-testid="answers-list">
                        { 
                            item.answers.map((answer: any, answerIndex: any) => {
                                return (
                                    <li key={answerIndex} className={currentIndex === answerIndex ? 'active' : ''} onClick={() => clickHandler(item.question, answer, answerIndex, questionIndex, item.correctAnswer)} data-testid="answers-option">{answer}</li>
                                    )
                                })
                            }
                            </ul>
                            <div className="control-buttons">
                            {(pageNumber + 1) > 1 &&
                                <button className="back-button" onClick={() => btnClick('prev', questionIndex - 1)} data-testid="back-btn">Back</button>
                            }
                            {(pageNumber + 1) < questionData.length &&
                                <button className="next-button" onClick={() => btnClick('next', questionIndex + 1)} disabled={currentIndex === -1} data-testid="next-btn">Next</button>
                            }
                            {pageNumber + 1 === questionData.length &&
                                <Link to="/results-page"><button className="next-button" data-testid="results-btn">See results?</button></Link>
                            }
                            </div>
                            </div>
                            )
                        }
                        
                        return null;
                    })
                }
                </div>
                </div>
                );
            }
            
            export default QuizComponent;
            