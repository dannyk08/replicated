import React, { Component } from 'react';

import {
  Navigation,
  ScoreGraph,
  ScoreAnalysis,
} from './components';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />

        <div className="container">
          <div className="score-explanation-container">
            <ScoreGraph />
            <div className="score-explanation">
              <h4 className="title">Here is your Enterprise Grade</h4>
              <h3 className="sub-title">Awesome Score!</h3>
              <p>An explanation of the great score this is</p>
            </div>
          </div>

          <div className="score-analysis">
            <h3 className="title">Let's take a closer look at your scores</h3>
            <h4 className="sub-title">Select a category below...</h4>
            <ScoreAnalysis />
          </div>

          <h1>test</h1>
        </div>
      </div>
    );
  }
}

export default App;
