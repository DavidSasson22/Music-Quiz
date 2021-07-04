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
  const endPoint: string = `https://opentdb.com/api.php?amount=${amount}&${category}=12&difficulty=${difficulty}&type=multiple`;
  try {
    const data = await await axios.get(endPoint);
    return data.data.results.map((qstn: Question) => {
      return {
        ...qstn,
        answers: shuffleArray([...qstn.incorrect_answers, qstn.correct_answer]),
      };
    });
  } catch (e) {
    alert(e);
  }
};
