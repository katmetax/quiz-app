import 'jsdom-global/register';
import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

import QuizComponent from './';
import { mount } from 'enzyme';

const mockStoreData = {
    quiz: [
        {
            question: 'Question 1',
            answer: 'A',
            questionNo: 0,
            answerIndex: 0,
            answeredCorrectly: false
        },
        {
            question: 'Question 2',
            answer: 'B',
            questionNo: 1,
            answerIndex: 1,
            answeredCorrectly: false
        }
    ]
};

const mockQuizData = [
    {
        question: 'Question 1',
        answers: ['A', 'B', 'C'],
        correctAnswer: 'B'
    },
    {
        question: 'Question 2',
        answers: ['A', 'B', 'C'],
        correctAnswer: 'A'
    }
];

const mockStore = configureStore();

describe('QuizComponent', () => {
    const store = mockStore(mockStoreData);
    
    test('click on an answer should trigger clickHandler', () => {
        const clickHandler = jest.fn();
        const component = mount(
            <Provider store={store}>
            <QuizComponent questionData={mockQuizData} />
            </Provider>);
        const answer = component.find('[data-testid="answers-option"]').first();
        
        answer.props().onClick = clickHandler();
        answer.simulate('click');
        
        expect(clickHandler).toHaveBeenCalled();
    });

    test('click on an answer should make the class active', () => {
        const component = mount(
            <Provider store={store}>
            <QuizComponent questionData={mockQuizData} />
            </Provider>);
        let answers = component.find('[data-testid="answers-option"]');
        answers.at(1).simulate('click');
        answers = component.find('[data-testid="answers-option"]');
        
        expect(answers.at(1).hasClass('active')).toBe(true);
    });

    describe('Button clicks', () => {
        test('click on next button should bring up next set of questions', () => {
            const component = mount(
                <Provider store={store}>
                <QuizComponent questionData={mockQuizData} />
                </Provider>);
            component.find('[data-testid="next-btn"]').simulate('click');
            
            expect(component.find('[data-testid="question-root"] h3').text()).toContain('Question 2');
        });

        test('click on back button should bring up previous set of questions', () => {
            const component = mount(
                <Provider store={store}>
                <QuizComponent questionData={mockQuizData} />
                </Provider>);
            component.find('[data-testid="next-btn"]').simulate('click');
            component.find('[data-testid="back-btn"]').simulate('click');

            expect(component.find('[data-testid="question-root"] h3').text()).toContain('Question 1');
        });

        test.skip('click on the results button should run results fn', () => {
            const component = mount(
                <Provider store={store}>
                <QuizComponent questionData={mockQuizData} />
                </Provider>);
            window.alert = jest.fn();
            component.find('[data-testid="next-btn"]').simulate('click');
            component.find('[data-testid="results-btn"]').simulate('click');
        
            expect(window.alert).toHaveBeenCalled();
        });
    });

    test('if an answer is not found in store then do not pre-select an answer', () => {
        const mockStoreDataNoAnswers = {
            quiz: [
                {
                    question: 'Question 1',
                    answer: 'A',
                    questionNo: 0,
                    answerIndex: 0,
                    answeredCorrectly: false
                }
            ]
        };
        const store = mockStore(mockStoreDataNoAnswers);
        const component = mount(
            <Provider store={store}>
            <QuizComponent questionData={mockQuizData} />
            </Provider>);
        component.find('[data-testid="next-btn"]').simulate('click');
        const answers = component.find('[data-testid="answers-option"]');

        answers.forEach((answer) => {
            expect(answer.hasClass('active')).toBe(false);
        })
    });
});
