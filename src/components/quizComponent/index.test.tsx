import 'jsdom-global/register';
import { useSelector, useDispatch } from 'react-redux';
import { render, shallow } from 'enzyme';
import React from 'react';

import QuizComponent from './';

jest.mock('react-router-dom', () => ({
    Link: jest.fn()
}));
jest.mock("react-redux", () => ({
    useSelector: jest.fn(fn => fn()),
    useDispatch: jest.fn()
}));

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

describe('QuizComponent', () => {
    beforeEach(() => {
        (useSelector as any).mockImplementation((cb:any) => cb(mockStoreData));
        (useDispatch as any).mockReturnValue(jest.fn());
    });
    afterEach(() => {
        jest.clearAllMocks();
    })
    
    test('click on an answer should trigger clickHandler', () => {
        const clickHandler = jest.fn();
        const component = shallow(<QuizComponent questionData={mockQuizData} />);
        const answer = component.find('[data-testid="answers-option"]').first();
        answer.props().onClick = clickHandler();
        answer.simulate('click');
        expect(clickHandler).toHaveBeenCalled();
    });

    test('click on an answer should make the class active', () => {
        const component = shallow(<QuizComponent questionData={mockQuizData} />);
        let answers = component.find('[data-testid="answers-option"]');
        answers.at(1).simulate('click');
        answers = component.find('[data-testid="answers-option"]');
        
        expect(answers.at(1).hasClass('active')).toBe(true);
    });

    describe('Button clicks', () => {
        test('click on next button should bring up next set of questions', () => {
            const component = shallow(<QuizComponent questionData={mockQuizData} />);
            component.find('[data-testid="next-btn"]').simulate('click');
            
            expect(component.find('[data-testid="question-root"] h3').text()).toContain('Question 2');
        });

        test('click on back button should bring up previous set of questions', () => {
            const component = shallow(<QuizComponent questionData={mockQuizData} />);
            component.find('[data-testid="next-btn"]').simulate('click');
            component.find('[data-testid="back-btn"]').simulate('click');

            expect(component.find('[data-testid="question-root"] h3').text()).toContain('Question 1');
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
        (useSelector as any).mockReturnValue(mockStoreDataNoAnswers);
        const component = shallow(<QuizComponent questionData={mockQuizData} />);
        component.find('[data-testid="next-btn"]').simulate('click');
        const answers = component.find('[data-testid="answers-option"]');

        answers.forEach((answer) => {
            expect(answer.hasClass('active')).toBe(false);
        })
    });
});
