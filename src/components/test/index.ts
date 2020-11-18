import { otherTing } from './otherTing';

const myTing = () => {
    console.log('otherTing:', otherTing)
    if ( otherTing ) {
        return 'it worked';
    } else {
        return 'did not work - wah wah';
    }
};

export default myTing;
