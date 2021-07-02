import axios from 'axios';

export enum Difficulty {
  EASY = "easy",
  MEDIUM = "medium",
  HARD ="hard"
}

export const fetchQuiz = async (amount:number, difficulty:Difficulty) => {
  const endPoint:string = `https://opentdb.com/api.php?amount=${amount}&category=12&difficulty=${difficulty}&type=multiple`;
  try {
    const data = await (await axios.get(endPoint));
    console.log(data);
  } catch (e) {
    alert(e);
  }
} 