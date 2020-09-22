import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

import QuizComponent from './';
import { mount, shallow } from 'enzyme';
import { act } from 'react-dom/test-utils';

const mockData = {
    question: 'Question 1',
    answer: 'A'
}

const mockStore = configureStore();

describe('QuizComponent', () => {
    const store = mockStore(mockData);

    test('click on an answer should trigger clickHandler', () => {
        const clickHandler = jest.fn();
        const component = mount(
            <Provider store={store}>
                <QuizComponent />
            </Provider>);
        const answer = component.find('[data-testid="answers-option"]').first();

        answer.props().onClick = clickHandler();
        answer.simulate('click');

        expect(clickHandler).toHaveBeenCalled();
    })
    
    test('click on an answer should make the class active', () => {
        const component = mount(
            <Provider store={store}>
                <QuizComponent />
            </Provider>);
        let answers = component.find('[data-testid="answers-option"]');
        answers.at(1).simulate('click');
        answers = component.find('[data-testid="answers-option"]');

        expect(answers.at(1).hasClass('active')).toBe(true);
    })
})