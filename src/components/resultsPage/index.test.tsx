import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import configureStore from 'redux-mock-store';
import { mount, render } from 'enzyme';

import ResultsPage from '.';

const mockStoreData = {
    quiz: [
        {
            question: 'Question 1',
            answer: 'A',
            questionNo: 0,
            answerIndex: 0,
            answeredCorrectly: true
        },
        {
            question: 'Question 2',
            answer: 'B',
            questionNo: 1,
            answerIndex: 1,
            answeredCorrectly: true
        }
    ]
};

const mockStore = configureStore();

describe('ResultsPage', () => {
    const store = mockStore(mockStoreData);

    test('Heading should display quiz result', () => {
        const component = render(<ResultsPage />);

        expect(component.find('[data-test="results-container"] h1')).toEqual('You Won');
    });
});