import gql from 'graphql-tag';

export const PREPARE_ASSESSMENT_MUTATION = gql`
  mutation prepareAssessment($templateId: String!) {
    prepareAssessment(templateId: $templateId)
  }
`
