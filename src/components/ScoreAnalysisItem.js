import React from 'react';

import './ScoreAnalysisItem.css';
import { scoreMap } from './../utils/scoreMapping';

export default class ScoreAnalysisItem extends React.Component {
  render() {
    const {
      analysis: {
        score,
        assessment
      }
    } = this.props

    return <div className="ScoreGraphItem">
      <h5>{assessment}</h5>
      <div>
        <p>logo</p>
        <h4>{scoreMap[score]}</h4>
      </div>
    </div>
  }
}
