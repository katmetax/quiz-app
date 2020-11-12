import React from 'react';
import { useSelector } from 'react-redux';
import { shallow } from 'enzyme';

import ResultsPage from '.';

jest.mock('react-router-dom', () => ({
    Link: jest.fn()
}));
jest.mock("react-redux", () => ({
    useSelector: jest.fn(fn => fn())
}));

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

describe('ResultsPage', () => {
    beforeEach(() => {
        (useSelector as any).mockImplementation((cb:any) => cb(mockStoreData));
    });
    afterEach(() => {
        jest.clearAllMocks();
    })

    test('renders correctly', () => {
        const component = shallow(<ResultsPage />);
        expect(component).toMatchSnapshot();
    });
    
    test('Heading should display winning quiz result', () => {
        const component = shallow(<ResultsPage />);
        expect(component.find('[data-test="results-container"] h1').text()).toEqual('You Won!');
    });

    test('Heading should display losing quiz result', () => {
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
        (useSelector as any).mockReturnValue(mockStoreData);
        const component = shallow(<ResultsPage />);
        expect(component.find('[data-test="results-container"] h1').text()).toEqual('You Lost!');
    });

    test('Text should display number of correct and total number of answers', () => {
        const component = shallow(<ResultsPage />);
        expect(component.find('[data-test="results-container"] p').text()).toEqual('You got 2 out of 2 questions right!');
    });
});
