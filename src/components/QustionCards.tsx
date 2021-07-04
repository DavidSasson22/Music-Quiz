import React from 'react';
import Answer from './Answer'
import { QuizSummary } from './Main';
import { Card } from '../style/QustionCard.style'

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
    <Card>
      <div className="cardHead">
        <p className="number">
          Qustion: {qustionNum} / {totalQustions}
        </p>
      </div>
      <div className="question">
        <p dangerouslySetInnerHTML={{ __html: qustion }} />
      </div>
      <ol type="A">
        <Answer answers={answers} userAnswer={userAnswer} callBack={callBack} />
      </ol>
    </Card>
  )
}


export default QustionCards;