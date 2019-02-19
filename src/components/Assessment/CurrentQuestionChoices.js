import React from 'react';

const CurrentQuestionChoices = ({
  choices,
  handleChoice,
  selectedChoiceId
}) => {
  return (
    <div className="choices">
      {
        choices.map(c => {
          return <div key={c.id} className='choices-item'>
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

