import React from 'react';
import ScoreAnalysisItem from './ScoreAnalysisItem';

import { mockAnalysis } from './../utils/mockData';

export default class ScoreAnalysis extends React.Component {
  render() {
    return <div className="ScoreAnalysis">
      {
        mockAnalysis.map((analysis, index) => {
          return <ScoreAnalysisItem key={index * Date.now()} analysis={analysis} />
        })
      }
    </div>
  }
}
