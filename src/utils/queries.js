import gql from 'graphql-tag';

export const GET_ASSESSMENT_QUERY = gql`
  query assessment($id: String!) {
    assessment(id: $id) {
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
