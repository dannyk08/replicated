import React from 'react';
import { Query, Mutation, ApolloConsumer } from 'react-apollo';
import gql from 'graphql-tag';

import { preparedAssessment } from './../utils/mockData';
import { CurrentQuestion } from '../components';
const id = "8s-lJ81i8FATjivlANvIRZz8h1tGGBoC"

const GET_ASSESSMENT_QUERY = gql`
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


const PREPARE_ASSESSMENT_MUTATION = gql`
  mutation prepareAssessment($templateId: String!) {
    prepareAssessment(templateId: $templateId)
  }
`

export default class TestPage extends React.Component {
  render() {
    return <Assessment />
    // <Mutation mutation={PREPARE_ASSESSMENT_MUTATION} variables={{ templateId: "1" }}>
    //   {
    //     (startAssessment, { data: { prepareAssessment } = {} } = {}) => {
    //       if (!prepareAssessment) {
    //         return <PrepareAssessment startAssessment={startAssessment} />
    //       }
    // return <Assessment id={prepareAssessment} />
    //     }
    //   }
    // </Mutation>
  }
}

function Assessment() {
  console.log({ preparedAssessment });
  const currentQuestion = preparedAssessment.questions[0]
  return <CurrentQuestion currentQuestion={currentQuestion} />
}


// function PrepareAssessment({ startAssessment } = {}) {
//   return <button onClick={startAssessment}>Start Assessment</button>
// }

// function Assessment({ id } = {}) {
//   return <Query query={GET_ASSESSMENT_QUERY} variables={{ id }}>
//     {
//       ({ loading, error, data }) => {
//         if (loading) {
//           console.log({ loading });
//           return <h4>Loading...</h4>
//         }
//         if (error) {
//           console.log({ error });
//           return <h4>There's an error</h4>
//         }
//         console.log('Assessment', { data });
//         return (
//           <React.Fragment>
//             <p>There's data</p>
//           </React.Fragment>
//         )
//       }
//     }
//   </Query>
// }
