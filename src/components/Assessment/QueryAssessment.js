import React from 'react';
import { Query, Mutation } from 'react-apollo';

import { GET_ASSESSMENT_QUERY } from '../../utils/queries';
import CurrentQuestion from './CurrentQuestion';
import { UPDATE_ASSESSMENT_MUTATION } from '../../utils/mutations';

const QueryAssessment = ({
  id = '',
  handleSelectedChoice,
  selectedChoiceId,
  currentQuestionIndex,
  submitCurrentChoice,
  history,
}) => {

  return <Query query={GET_ASSESSMENT_QUERY} variables={{ id }}>
    {
      ({ loading, error, data }) => {
        if (loading) return <h4>Loading...</h4>
        if (error) return <h4>There's an error</h4>

        const currentQuestion = data.assessment.questions[currentQuestionIndex]
        const choiceId = selectedChoiceId && selectedChoiceId.length ? selectedChoiceId : (currentQuestion && currentQuestion.choices[currentQuestion.choices.length - 1].id)
        return <Mutation
          mutation={UPDATE_ASSESSMENT_MUTATION}
          variables={{
            assessmentId: id || '',
            questionId: currentQuestion.id || '',
            selectedChoiceId: choiceId,
          }}
          onCompleted={submitCurrentChoice(data.assessment.questions, currentQuestion.id)}
        >
          {
            (updateAssessmentQuestion, { loading, error, data }) => {
              if (loading) return <h4>Loading...</h4>
              if (error) return <h4>There's an error</h4>

              if (data && data.updateAssessment.isCompleted) {
                history.push('/completed-assessment')
                return null
              }

              return <CurrentQuestion
                handleSelectedChoice={handleSelectedChoice}
                selectedChoiceId={selectedChoiceId}
                currentQuestion={currentQuestion}
                buttonDisabled={data && data.updateAssessment.isCompleted}
                submitCurrentChoice={updateAssessmentQuestion}
              />
            }
          }
        </Mutation>
      }

    }
  </Query>
}

export default QueryAssessment
