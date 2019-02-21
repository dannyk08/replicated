import React, { Component } from 'react';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost';

import './App.css';
import { Navigation } from './components';
import Router from './Router';

const client = new ApolloClient({
  uri: 'https://assessment.staging.enterprisegrade.io/graphql'
})

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />

        <div className="container">
          <ApolloProvider client={client}>
            <Router />
          </ApolloProvider>
        </div>
      </div>
    );
  }
}

export default App;
