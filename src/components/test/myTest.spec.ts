// import myTing from '.';
import { otherTing } from './otherTing';

describe('myTing', () => {
    beforeEach(() => {
        jest.unmock("./otherTing");
        jest.resetModules();
        jest.clearAllMocks();
        jest.resetAllMocks();
    });
    test('it returns it worked', () => {
        jest.doMock('./otherTing', () => ({ otherTing: true }) );
        const myTing = require('./index');
        // jest.doMock('./otherTing', () => ({otherTing: false}));
        // otherTing = () => true;
        expect(myTing.default()).toEqual('it worked');
    })
    
    test('it returns did not work - wah wah', () => {
        jest.doMock('./otherTing', () => ({ otherTing: false }) );
        const myTing = require('./index');
        expect(myTing.default()).toEqual('did not work - wah wah');
    })
})
