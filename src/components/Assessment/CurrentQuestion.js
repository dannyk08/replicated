import React from 'react';
import { CurrentQuestionChoices } from '.';

const CurrentQuestion = ({
  currentQuestion,
  submitCurrentChoice,
  handleSelectedChoice,
  selectedChoiceId,
  buttonDisabled,
}) => {
  return (
    <div>
      <h4>{currentQuestion.text}</h4>
      <p>{currentQuestion.question}</p>
      <p>{currentQuestion.description}</p>
      <CurrentQuestionChoices
        choices={currentQuestion.choices}
        handleChoice={handleSelectedChoice}
        selectedChoiceId={selectedChoiceId}
      />
      <button
        disabled={buttonDisabled}
        onClick={submitCurrentChoice}
      >Next</button>
    </div>
  )
}

export default CurrentQuestion
