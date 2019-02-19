import React from 'react';
import ScoreAnalysisItem from './ScoreAnalysisItem';

export default class ScoreAnalysis extends React.Component {
  render() {
    return <div className="ScoreAnalysis">
      {
        [].map((analysis, index) => {
          return <ScoreAnalysisItem key={index * Date.now()} analysis={analysis} />
        })
      }
    </div>
  }
}
