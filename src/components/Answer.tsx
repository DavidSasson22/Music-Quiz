import React from 'react'


type Props = {
  answers: string[],
  callBack: any,
  userAnswer: any,
}

const Answer: React.FC<Props> = ({ answers, userAnswer, callBack }) => {
  return (
    <>
      {answers.map(ans => (
        <div>
          <button disabled={userAnswer} onClick={callBack}>
            <span dangerouslySetInnerHTML={{ __html: ans }}></span>
          </button>
        </div>
      ))}
    </>
  )
}


export default Answer;