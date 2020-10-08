declare interface questionResponse {
    question: string;
    answer: string;
    questionNo: number;
}

declare interface saveAnswerInterface {
    type: string;
    payload: questionResponse;
}
