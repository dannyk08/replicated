import React from 'react';

import './CurrentQuestionChoices.css';
import { QuestionOption } from '../Global';
const CurrentQuestionChoices = ({
  choices,
  handleChoice,
  selectedChoiceId
}) => {
  return (
    <div className="CurrentQuestionChoices">
      {
        choices.map(option => {
          return <QuestionOption
            selected={selectedChoiceId === option.id}
            handleChoice={handleChoice}
            option={option}
            key={option.id}
          />
        })
      }
    </div>
  )
}

export default CurrentQuestionChoices

