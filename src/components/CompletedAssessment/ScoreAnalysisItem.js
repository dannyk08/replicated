import React from 'react';

import './ScoreAnalysisItem.css';
import { scoreMap } from './../../helpers/scoreMapping';

export default function ScoreAnalysisItem({
  assessment
}) {
  const grade = assessment.choices.find(c => c.isSelected)
  return <div className="ScoreGraphItem">
    <h5>{assessment.text}</h5>
    <div className='score-container'>
      <p>logo X</p>
      <h4>{scoreMap[grade.weight]}</h4>
    </div>
  </div>
}
