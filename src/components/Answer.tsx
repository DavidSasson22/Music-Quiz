import React from 'react'
import { QuizSummary } from './Main'
import { BtnWraper } from '../style/QustionCard.style'


type Props = {
  answers: string[],
  callBack: (e: React.MouseEvent<HTMLButtonElement>) => void,
  userAnswer: QuizSummary | undefined,
}

const Answer: React.FC<Props> = ({ answers, userAnswer, callBack }) => {
  return (
    <>
      {answers.map((ans, i) => (
        <BtnWraper key={i} correct={userAnswer?.rightAns === ans} userClicked={userAnswer?.answer === ans}>
          <button disabled={!!userAnswer} value={ans} onClick={callBack}>
            <span dangerouslySetInnerHTML={{ __html: ans }}></span>
          </button>
        </BtnWraper>
      ))}
    </>
  )
}


export default Answer;