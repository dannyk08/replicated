import React from 'react';
import {
  BrowserRouter,
  Route,
  Redirect,
} from 'react-router-dom';

import {
  CompletedSurvey,
  Assessment
} from './views';
import { getCookie } from './helpers';

const Router = () => {
  const currentCookie = getCookie('prepareAssessment')

  return <BrowserRouter>
    <React.Fragment>
      <Route path="/completed-assessment" render={(props) => (
        !currentCookie && currentCookie.prepareAssessment ?
          (<Redirect to="/" />) :
          (<CompletedSurvey {...props} />)
      )} />
      <Route exact path="/" component={Assessment} />
    </React.Fragment>
  </BrowserRouter>
}

export default Router
