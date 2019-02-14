import React from 'react';
import { scoreMap } from '../utils/scoreMapping';

export default class AnswerAnalysisItem extends React.Component {
  render() {
    const {
      assessment,
      score,
      answer,
      suggestion,
      learnMore: {
        url,
        text,
      },
    } = this.props.answer

    return <div className="AnswerAnalysisItem">
      <p>x</p>
      <h3 className="title">{assessment} <span>{scoreMap[score]}</span> </h3>

      <div className="sub-title">
        <p>Your Answer</p>
        <h4>{answer}</h4>
      </div>
      <h3>{suggestion}</h3>
      <a>{text} ></a>
    </div>
  }
}
