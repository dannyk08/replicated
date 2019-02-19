import React from 'react';
import { Query } from 'react-apollo';

import { GET_ASSESSMENT_QUERY } from '../../utils/queries';
import CurrentQuestion from './CurrentQuestion';

const QueryAssessment = ({
  id = '',
  handleSelectedChoice,
  selectedChoice,
  currentQuestionIndex,
  submitCurrentChoice
}) => {

  return <Query query={GET_ASSESSMENT_QUERY} variables={{ id }}>
    {
      ({ loading, error, data }) => {
        if (loading) return <h4>Loading...</h4>
        if (error) return <h4>There's an error</h4>

        return <CurrentQuestion
          handleSelectedChoice={handleSelectedChoice}
          selectedChoice={selectedChoice}
          currentQuestion={data.assessment.questions[currentQuestionIndex]}
          submitCurrentChoice={submitCurrentChoice(data.assessment.questions)}
        />
        return null
      }

    }
  </Query>
}

export default QueryAssessment
