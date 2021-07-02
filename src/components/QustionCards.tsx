import React from 'react';
import Answer from './Answer'
import { QuizSummary } from './Main';

type Props = {
  qustion: string,
  answers: string[],
  callBack: (e: React.MouseEvent<HTMLButtonElement>) => void,
  userAnswer: QuizSummary | undefined,
  qustionNum: number,
  totalQustions: number
}

const QustionCards: React.FC<Props> = (
  { qustion,
    answers,
    callBack,
    userAnswer,
    qustionNum,
    totalQustions }) => {
  return (
    <div>
      <p className="number">
        Qustion: {qustionNum} / {totalQustions}
      </p>
      <p dangerouslySetInnerHTML={{ __html: qustion }} />
      <div>
        <Answer answers={answers} userAnswer={userAnswer} callBack={callBack} />
      </div>
    </div>
  )
}


export default QustionCards;