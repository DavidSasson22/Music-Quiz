import React from 'react'
import { QuizSummary } from './Main'


type Props = {
  answers: string[],
  callBack: (e: React.MouseEvent<HTMLButtonElement>) => void,
  userAnswer: QuizSummary | undefined,
}

const Answer: React.FC<Props> = ({ answers, userAnswer, callBack }) => {
  return (
    <>
      {answers.map((ans, i) => (
        <li key={i}>
          <button disabled={!!userAnswer} value={ans} onClick={callBack}>
            <span dangerouslySetInnerHTML={{ __html: ans }}></span>
          </button>
        </li>
      ))}
    </>
  )
}


export default Answer;