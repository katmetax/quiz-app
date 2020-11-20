import rootReducer, { initialState } from '.';

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

        expect(rootReducer(initialState, action)).toEqual(initialState);
    });
});
