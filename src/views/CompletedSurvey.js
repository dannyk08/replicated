import React from 'react';
import { ScoreGraph, ScoreAnalysis, AnswerAnalysis } from '../components';
import { getCookie } from '../helpers';
import { Query } from 'react-apollo';
import { GET_ASSESSMENT_QUERY } from '../utils/queries';

export default class CompletedSurvey extends React.Component {
  render() {
    const currentCookie = getCookie('prepareAssessment')
    let prepareAssessment = currentCookie && currentCookie.prepareAssessment

    return <React.Fragment>
      <Query
        query={GET_ASSESSMENT_QUERY}
        variables={{ id: prepareAssessment }}
      >
        {
          ({ loading, error, data }) => {
            if (loading) return <h4>loading...</h4>
            if (error) return <h4>error...</h4>

            if (!data.assessment || (data.assessment && !data.assessment.isCompleted)) {
              this.props.history.push('/')
              return null
            }
          }
        }
      </Query>
      {/* <div className="score-explanation-container">
        <ScoreGraph />
        <div className="score-explanation">
          <h4 className="title">Here is your Enterprise Grade</h4>
          <h3 className="sub-title">Awesome Score!</h3>
          <p>An explanation of what a great score this is</p>
        </div>
      </div>

      <div className="score-analysis">
        <h3 className="title">Let's take a closer look at your scores</h3>
        <h4 className="sub-title">Select a category below...</h4>
        <ScoreAnalysis />
      </div>

      <div className="deep-answer-analysis">
        <AnswerAnalysis />
      </div> */}
    </React.Fragment>
  }
}
