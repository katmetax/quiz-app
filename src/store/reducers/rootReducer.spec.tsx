import rootReducer, { initialState } from '.';
import { SAVE_ANSWER } from '../constants';

describe('rootReducer', () => {
    test('Passing an undefined action type returns initial state', () => {
        const action = {
                type: 'undefined',
                payload: {
                    question: 'test',
                    answer: 'test',
                    questionNo: 1,
                    answerIndex: 2,
                    answeredCorrectly: true
                }
            };

        expect(rootReducer(undefined, action)).toEqual(initialState);
    });

    test('passing SAVE_ANSWER action type updates the state with the new payload', () => {
        const action = {
            type: SAVE_ANSWER,
            payload: {
                question: 'Question 1',
                answer: 'Answer 1',
                questionNo: 1,
                answerIndex: 1,
                answeredCorrectly: true
            }
        };

        const state = { quiz: [{
                question: 'Question 1',
                answer: 'Answer 1',
                questionNo: 1,
                answerIndex: 1,
                answeredCorrectly: true
        }]};

        expect(rootReducer(initialState, action)).toEqual(state);
    });

    test('passing payload with the same question and different answer returns the newly passed answer', () => {
        const action = {
            type: SAVE_ANSWER,
            payload: {
                question: 'Question 1',
                answer: 'Answer 2',
                questionNo: 1,
                answerIndex: 2,
                answeredCorrectly: true
            }
        };

        const state = { quiz: [{
                question: 'Question 1',
                answer: 'Answer 1',
                questionNo: 1,
                answerIndex: 1,
                answeredCorrectly: true
        }]};

        const expectedState = { quiz: [{
            question: 'Question 1',
            answer: 'Answer 2',
            questionNo: 1,
            answerIndex: 2,
            answeredCorrectly: true
    }]};

        expect(rootReducer(state, action)).toEqual(expectedState);
    });

    test('passing a new question and answer in payload updates state', () => {
        const action = {
            type: SAVE_ANSWER,
            payload: {
                question: 'Question 2',
                answer: 'Answer 3',
                questionNo: 2,
                answerIndex: 3,
                answeredCorrectly: true
            }
        };

        const state = { quiz: [{
                question: 'Question 1',
                answer: 'Answer 1',
                questionNo: 1,
                answerIndex: 1,
                answeredCorrectly: true
        }]};

        const expectedState = { quiz: [{
            question: 'Question 1',
            answer: 'Answer 1',
            questionNo: 1,
            answerIndex: 1,
            answeredCorrectly: true
        }, {
            question: 'Question 2',
            answer: 'Answer 3',
            questionNo: 2,
            answerIndex: 3,
            answeredCorrectly: true
        }]};

        expect(rootReducer(state, action)).toEqual(expectedState);
    });
});
