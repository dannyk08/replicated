import React from 'react';

const CurrentQuestionChoices = ({
  choices,
  handleChoice,
  selectedChoice
}) => {
  return (
    <div className="choices">
      {
        choices.map(c => {
          return <div key={c.id} className='choices-item'>
            <input
              type="radio"
              name={c.id}
              checked={selectedChoice === c.id}
              onChange={handleChoice}
              value={c.id}
            />
            <label id={c.id}>{c.text}</label>
          </div>
        })
      }
    </div>
  )
}

export default CurrentQuestionChoices

