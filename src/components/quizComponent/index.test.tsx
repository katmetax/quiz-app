import 'jsdom-global/register';
import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

import QuizComponent from './';
import { mount } from 'enzyme';

const mockStoreData = {
    question: 'Question 1',
    answer: 'A'
}

const mockQuizData = [
    {
        question: 'Question 1',
        answers: ['A', 'B', 'C']
    },
    {
        question: 'Question 2',
        answers: ['A', 'B', 'C']
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
    })
    
    test('click on an answer should make the class active', () => {
        const component = mount(
            <Provider store={store}>
                <QuizComponent questionData={mockQuizData} />
            </Provider>);
        let answers = component.find('[data-testid="answers-option"]');
        answers.at(1).simulate('click');
        answers = component.find('[data-testid="answers-option"]');

        expect(answers.at(1).hasClass('active')).toBe(true);
    })
})
