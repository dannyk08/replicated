import React from 'react';
import { Mutation } from 'react-apollo';

import { PrepareAssessment, QueryAssessment } from '../components';
import { PREPARE_ASSESSMENT_MUTATION } from './../utils/mutations';
import { getCookie, setCookie } from '../helpers/cookies';

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
    let { prepareAssessment = null } = getCookie('prepareAssessment')

    if (prepareAssessment) {
      return (
        <QueryAssessment
          id={prepareAssessment}
          handleSelectedChoice={this.handleSelectedChoice}
          selectedChoiceId={this.state.selectedChoice}
          currentQuestionIndex={this.state.currentQuestionIndex}
          submitCurrentChoice={this.submitCurrentChoice}
        />
      )
    }

    return (
      <Mutation mutation={PREPARE_ASSESSMENT_MUTATION} variables={{ templateId: Date.now() }}>
        {
          (startAssessment, { data: { prepareAssessment } = {} } = {}) => {
            if (!prepareAssessment) {
              return <PrepareAssessment startAssessment={startAssessment} />
            }
            setCookie({ name: 'prepareAssessment', value: prepareAssessment })
            return <QueryAssessment
              id={prepareAssessment}
              handleSelectedChoice={this.handleSelectedChoice}
              selectedChoiceId={this.state.selectedChoice}
              currentQuestionIndex={this.state.currentQuestionIndex}
              submitCurrentChoice={this.submitCurrentChoice}
            />
          }
        }
      </Mutation >
    )
  }
}
