import { QuizCategory } from "typings/quiz-category";

export interface QuizResult {
    id: string;
    quizName: string;
    quizCategory: QuizCategory;
    quizDate: string;
    obtainedMarks: number;
    maximumMarks: number;
    totalParticipants?: number;
    myRank?: number;
}