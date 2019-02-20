import React from 'react';

import { AnswerAnalysisItem } from '.';

export default function AnswerAnalysis({
  assessmentQuestions
}) {
  return <div className="AnswerAnalysis">
    {
      assessmentQuestions.map(assessment => {
        return <AnswerAnalysisItem key={assessment.id} assessment={assessment} />
      })
    }
  </div>
}
