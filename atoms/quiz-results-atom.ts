import { atom } from "recoil";
import { QuizResult } from "typings/quiz-result";

export const quizResultsAtom = atom<Array<QuizResult>>({
    key: "quizResultsAtom",
    default: []
});
