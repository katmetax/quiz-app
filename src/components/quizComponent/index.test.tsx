import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';

import QuizComponent from './';

const mockData = {
    question: 'Question 1',
    answer: 'A'
}

const mockStore = ({quiz: []});

describe('QuizComponent', () => {
    const store = mockStore;

    test('click on an answer should trigger saveQuizAnswer', () => {
    })
    
    test('click on an answer should make the class active', () => {
        const component = mount(
        <Provider store={store}>
            <QuizComponent />
        </Provider>);
        // const answers = component.queryAllByTestId('answers-list');
        const answers = component.find('[data-testid="answers-list"]');
        
        console.log(answers);
    })
})