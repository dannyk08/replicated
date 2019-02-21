import React from 'react';
import { CurrentQuestionChoices } from '.';

const CurrentQuestion = ({
  currentQuestion,
  submitCurrentChoice,
  handleSelectedChoice,
  selectedChoice
}) => {
  return (
    <div>
      <h4>{currentQuestion.text}</h4>
      <p>{currentQuestion.question}</p>
      <p>{currentQuestion.description}</p>
      <CurrentQuestionChoices
        choices={currentQuestion.choices}
        handleChoice={handleSelectedChoice}
        selectedChoice={selectedChoice}
      />
      <button onClick={submitCurrentChoice}>submit</button>
    </div>
  )
}

export default CurrentQuestion
