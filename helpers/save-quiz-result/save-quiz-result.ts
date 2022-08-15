import { QuizResult } from "typings/quiz-result";

export const saveQuizResult = (quizResult: QuizResult, setQuizResults: Function) => {
    setQuizResults((prev: Array<QuizResult>) => [...prev, quizResult]);
}