import React, { Component } from 'react';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost';

import './App.css';
import { Navigation } from './components';
import { CompletedSurvey, Assessment } from './views';

const client = new ApolloClient({
  uri: 'https://assessment.staging.enterprisegrade.io/graphql'
})

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />

        <div className="container">
          {/* TODO: make this a route */}
          {/* <CompletedSurvey /> */}
          <ApolloProvider client={client}>
            <Assessment />
          </ApolloProvider>
        </div>
      </div>
    );
  }
}

export default App;
