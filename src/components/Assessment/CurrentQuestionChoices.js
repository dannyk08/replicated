import React from 'react';

import './CurrentQuestionChoices.css';
const CurrentQuestionChoices = ({
  choices,
  handleChoice,
  selectedChoiceId
}) => {
  return (
    <div className="CurrentQuestionChoices">
      {
        choices.map(c => {
          return <div key={c.id} className={`choices-item ${(selectedChoiceId === c.id) && 'selected'}`}>
            <input
              type="radio"
              name={c.id}
              id={c.id}
              checked={selectedChoiceId === c.id}
              onChange={handleChoice}
              value={c.id}
            />
            <label htmlFor={c.id}>{c.text}</label>
          </div>
        })
      }
    </div>
  )
}

export default CurrentQuestionChoices

