declare interface questionResponse {
    question: string;
    answer: string;
    questionNo: number;
    answerIndex: number;
    answeredCorrectly: boolean;
}

declare interface saveAnswerInterface {
    type: string;
    payload: questionResponse;
}
