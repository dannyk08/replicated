import React from 'react';
import { Query, Mutation, ApolloConsumer } from 'react-apollo';

import { CurrentQuestion, PrepareAssessment } from '../components';
import { GET_ASSESSMENT_QUERY } from './../utils/queries';
import { PREPARE_ASSESSMENT_MUTATION } from './../utils/mutations';

// TODO: remove mockdata
import { preparedAssessment } from '../utils/mockData';
// TODO: remove static id
const id = "8s-lJ81i8FATjivlANvIRZz8h1tGGBoC"

export default class Assessment extends React.Component {
  constructor(props) {
    super(props)
    this.submitCurrentChoice = (questions) => this._submitCurrentChoice.bind(this, questions)
    this.handleSelectedChoice = this.handleSelectedChoice.bind(this)
    this.state = {
      currentQuestionIndex: 0,
      selectedChoice: null
    }
  }

  handleSelectedChoice(e) {
    this.setState({ selectedChoice: e.target.value })
  }

  _submitCurrentChoice(questions) {
    if (questions[this.state.currentQuestionIndex + 1]) {
      const currentQuestionIndex = this.state.currentQuestionIndex + 1
      this.setState({ currentQuestionIndex })
    }
  }

  render() {
    return (
      <Mutation mutation={PREPARE_ASSESSMENT_MUTATION} variables={{ templateId: "1" }}>
        {
          (startAssessment, { data: { prepareAssessment } = {} } = {}) => {
            if (!prepareAssessment) {
              return <PrepareAssessment startAssessment={startAssessment} />
            }
            return <Query query={GET_ASSESSMENT_QUERY} variables={{ id }}>
              {
                ({ loading, error, data }) => {
                  if (loading) return <h4>Loading...</h4>
                  if (error) return <h4>There's an error</h4>
                  console.log('Assessment', { data });
                  return <CurrentQuestion
                    handleSelectedChoice={this.handleSelectedChoice}
                    selectedChoice={this.state.selectedChoice}
                    currentQuestion={data.assessment.questions[this.state.currentQuestionIndex]}
                    submitCurrentChoice={this.submitCurrentChoice(data.assessment.questions)}
                  />
                }

              }
            </Query>
          }
        }
      </Mutation>
    )
  }
}
