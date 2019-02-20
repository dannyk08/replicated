import React from 'react';

import { Button } from './../Global';
import './PrepareAssessment.css';

const PrepareAssessment = ({ startAssessment } = {}) => {
  return <div className="PrepareAssessment">
    <h2>See How your tooling is doing</h2>
    <Button
      className={'button primary-button-action'}
      onClick={startAssessment}>
      Start Assessment >
    </Button>
  </div>
}

export default PrepareAssessment
