import React from 'react';
import { Query, Mutation, ApolloConsumer } from 'react-apollo';
import gql from 'graphql-tag';

// const ASSESSMENT_QUERY = gql`
//   {
//     assessment(id: "Lr7PQkcPVHqtQ6sd4sGxi12xnENW6Pue") {
//       id
//     }
//   }
// `

// mutation prepareAssessment($id: String) {
//   prepareAssessment(templateId: $id)
// }


const ASSESSMENT_MUTATION = gql`
  # mutation prepareAssessment($templateId: String) {
  #   prepareAssessment(templateId: $templateId)
  # }
  mutation Assessment($templateId: String) {
    prepareAssessment(templateId: $templateId)
  }
`

export default class TestPage extends React.Component {
  render() {
    return (
      <Mutation mutation={ASSESSMENT_MUTATION} variables={{ templateId: "1" }}>
        {
          (prepareAssessment, { data }) => {
            console.log({ data });
            return <button onClick={prepareAssessment}>post assessment</button>
          }
        }
      </Mutation>
      // <Query query={ASSESSMENT_QUERY}>
      //   {
      //     ({ loading, error, data }) => {
      //       if (loading) return <h4>Loading...</h4>
      //       if (error) return <h4>There's an error</h4>
      //       console.log({ data });
      //       return (
      //         <React.Fragment>
      //           <p>{data}</p>
      //         </React.Fragment>
      //       )
      //     }
      //   }
      // </Query>
    )
  }
}

