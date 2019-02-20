import React from 'react';

import { AnswerAnalysisItem } from '.';

export default class AnswerAnalysis extends React.Component {
  render() {
    return <div className="AnswerAnalysis">
      {
        [].map((answer, index) => {
          return <AnswerAnalysisItem key={index * Date.now()} answer={answer} />
        })
      }
    </div>
  }
}
