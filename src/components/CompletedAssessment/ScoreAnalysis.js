import React from 'react';
import ScoreAnalysisItem from './ScoreAnalysisItem';

export default function ScoreAnalysis({
  assessmentQuestions
}) {
  return <div className="ScoreAnalysis">
    {
      assessmentQuestions.map((assessment) => {
        return <ScoreAnalysisItem key={assessment.id} assessment={assessment} />
      })
    }
  </div>
}
