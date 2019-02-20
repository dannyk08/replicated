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
              // TODO: fix this anti-pattern
              this.props.history.push('/')
              return null
            }
            return <React.Fragment>
              <div className="score-explanation-container">
                <ScoreGraph />
                <div className="score-explanation">
                  <h1 className="title">Here is your Enterprise Grade</h1>
                  <h3 className="sub-title">Awesome! You’re already taking important steps towards becoming EnterpriseReady.</h3>
                  <p>This is some text with a better summary about what your answers mean and how you can be more EnterpriseReady. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                </div>
              </div>

              <div className="score-analysis">
                <h3 className="title">Let's take a closer look at your scores</h3>
                <h4 className="sub-title">Select a category below to get a more detailed view of your scores, as well as next steps on becoming more EnterpriseReady.</h4>
                <ScoreAnalysis assessmentQuestions={data.assessment.questions} />
              </div>

              {/* <div className="deep-answer-analysis">
                <AnswerAnalysis />
              </div> */}
            </React.Fragment>
          }
        }
      </Query>
    </React.Fragment>
  }
}
