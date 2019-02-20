import React from 'react';

import './QuestionOption.css';
import { scoreMap } from './../../helpers';
import { LetterLabel } from '.';
export default function QuestionOption({
  selected,
  option,
  handleChoice
}) {
  return (
    <div
      key={option.id}
      className={`question-option ${selected && 'selected' || ''}`}
      onClick={handleChoice(option.id)}
    >
      <LetterLabel className={`light-blue ${selected && 'inverted' || ''}`}>
        {scoreMap[option.weight]}
      </LetterLabel>
      <p>{option.text}</p>
    </div>
  )
}
