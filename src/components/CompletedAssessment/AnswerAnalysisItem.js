import React from 'react';

import { scoreMap } from './../../helpers';
import { Button } from '../Global';
import './AnswerAnalysisItem.css';

export default function AnswerAnalysisItem({
  assessment
}) {
  const grade = assessment.choices.find(c => c.isSelected)

  return <div className="AnswerAnalysisItem">
    <div className="analysis-logo">
      <p>Icon</p>
    </div>
    <div className="analysis-details">
      <h3 className="title">{assessment.text} <span>{scoreMap[grade.weight]}</span> </h3>

      <p className='sub-title'>Your Answer:</p>
      <p className='sub-title'>{grade.text}</p>

      <p className='sub-title'>{assessment.description}</p>
      <Button
        className={'button secondary-button-action'}
      >
        Learn More >
    </Button>
    </div>
  </div >
}
