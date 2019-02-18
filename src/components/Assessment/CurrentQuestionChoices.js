import React from 'react';

const CurrentQuestionChoices = ({ choices, handleChoice, selectedChoice }) => {
  console.log({ choices });

  return (
    <React.Fragment>
      {
        choices.map(c => {
          console.log({ c });
          return <div key={c.id}>
            <input type="radio" name={c.id} checked={selectedChoice === c.id} onChange={handleChoice} value={c.id} />
            <label id={c.id}>{c.text}</label>
          </div>
        })
      }
    </React.Fragment>
  )
}

export default CurrentQuestionChoices

