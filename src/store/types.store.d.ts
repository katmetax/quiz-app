declare interface questionResponse {
    question: string;
    answer: string;
    questionNo: number;
    answerIndex: number;
}

declare interface saveAnswerInterface {
    type: string;
    payload: questionResponse;
}
