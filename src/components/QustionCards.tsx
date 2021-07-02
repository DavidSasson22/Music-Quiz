import React from 'react';
import Answer from './Answer'

type Props = {
  qustion: string,
  answers: string[],
  callBack: any,
  userAnswer: any,
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