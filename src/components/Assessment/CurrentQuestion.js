import React from 'react';

import { CurrentQuestionChoices } from '.';
import './CurrentQuestion.css';

const CurrentQuestion = ({
  currentQuestion,
  submitCurrentChoice,
  handleSelectedChoice,
  selectedChoiceId,
  buttonDisabled,
}) => {
  return (
    <div className='CurrentQuestion'>
      <h3 className='title'>{currentQuestion.text}</h3>
      <p className='sub-title'>{currentQuestion.question}</p>
      <CurrentQuestionChoices
        choices={currentQuestion.choices}
        handleChoice={handleSelectedChoice}
        selectedChoiceId={selectedChoiceId}
      />
      <a
        disabled={buttonDisabled}
        onClick={submitCurrentChoice}
      >Next</a>
    </div>
  )
}

export default CurrentQuestion
