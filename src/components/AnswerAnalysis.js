import React from 'react';

import { mockAnswersAnalysis } from './../utils/mockData';
import { AnswerAnalysisItem } from '.';
export default class AnswerAnalysis extends React.Component {
  render() {
    return <div className="AnswerAnalysis">
      {
        mockAnswersAnalysis.map((answer, index) => {
          return <AnswerAnalysisItem key={index * Date.now()} answer={answer} />
        })
      }
    </div>
  }
}
