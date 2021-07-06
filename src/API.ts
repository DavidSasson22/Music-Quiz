import axios from "axios";
import { shuffleArray } from "./utlis";

export type Question = {
  category: string;
  correct_answer: string;
  incorrect_answers: string[];
  question: string;
  type: string;
};

export type QuestionState = Question & { answers: string[] };

export enum Difficulty {
  EASY = "easy",
  MEDIUM = "medium",
  HARD = "hard",
}

export const fetchQuiz = async (
  amount: number,
  difficulty: Difficulty,
  category: number
) => {
  const endPoint: string = `https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}&type=multiple`;
  try {
    const { data } = await axios.get(endPoint);
    return data.results.map((question: Question) => {
      const answers = shuffleArray([...question.incorrect_answers, question.correct_answer])

      return {
        ...question,
        answers,
      }
    });
    } catch (e) {
    alert(e);
  }
};
