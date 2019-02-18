import React from 'react';
import { CurrentQuestionChoices } from '.';

class CurrentQuestion extends React.Component {

  constructor(props) {
    super(props)
    this.handleChoice = this.handleChoice.bind(this)
    this.state = {
      selectedChoice: null
    }
  }

  handleChoice(e) {
    // e.persist()
    this.setState({
      selectedChoice: e.target.value
    }, () => {
      console.log({ state: this.state });
    })
  }

  render() {
    const { currentQuestion } = this.props
    console.log({ currentQuestion });
    return (
      <div>
        <h4>{currentQuestion.text}</h4>
        <p>{currentQuestion.question}</p>
        <p>{currentQuestion.description}</p>
        <div className="choices">
          <CurrentQuestionChoices
            choices={currentQuestion.choices}
            handleChoice={this.handleChoice}
            selectedChoice={this.state.selectedChoice}
          />
        </div>
      </div>
    )
  }
}

export default CurrentQuestion
