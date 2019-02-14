import React, { Component } from 'react';

import './App.css';
import { Navigation } from './components';
import { CompletedSurvey } from './views';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />

        <div className="container">
          {/* TODO: make this a route */}
          <CompletedSurvey />
        </div>
      </div>
    );
  }
}

export default App;
