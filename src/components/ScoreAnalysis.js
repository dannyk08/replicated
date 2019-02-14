import React from 'react';
import ScoreAnalysisItem from './ScoreAnalysisItem';

export default class ScoreAnalysis extends React.Component {
  render() {
    const mockData = [
      { assessment: 'Single Sign-On', score: 1 },
      { assessment: 'Security', score: 1 },
      { assessment: 'Role-Based AC', score: 1 },
      { assessment: 'Product Assortment', score: 1 },
      { assessment: 'Support/SLA', score: 1 },
      { assessment: 'Integrations', score: 1 },
      { assessment: 'Audit Logging', score: 3 },
      { assessment: 'Team Management', score: 5 },
      { assessment: 'Change Management', score: 4 },
      { assessment: 'Deployment Options', score: 2 },
      { assessment: 'Reporting', score: 2 },
    ]

    return <div className="ScoreAnalysis">
      {
        mockData.map((analysis, index) => {
          return <ScoreAnalysisItem key={index * Date.now()} analysis={analysis} />
        })
      }
    </div>
  }
}


export const scoreMap = {
  1: 'A',
  2: 'B',
  3: 'C',
  4: 'D',
  5: 'F',
}
