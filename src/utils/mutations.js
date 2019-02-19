import gql from 'graphql-tag';

export const PREPARE_ASSESSMENT_MUTATION = gql`
  mutation prepareAssessment($templateId: String!) {
    prepareAssessment(templateId: $templateId) {
      id
    }
  }
`

export const UPDATE_ASSESSMENT_MUTATION = gql`
  mutation updateAssessment($assessmentId: String!, $questionId: String!, $selectedChoiceId: String!) {
    updateAssessment(assessmentId: $assessmentId, questionId: $questionId, selectedChoiceId: $selectedChoiceId) {
      id
      isCompleted
      questions {
        id
        text
        description
        question
        comment
        choices {
          id
          text
          recommendation
          recommendationPublic
          isSelected
          weight
        }
      }
    }
  }
`
