import React from 'react';

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      text: '',
      valid: false
    };
  }

  poem() {
    const input = this.state.text
    const splitted = (input.split('\n'))
    if (splitted.length === 3 && splitted[0].trim().split(' ').length === 5 && splitted[1].trim().split(' ').length === 3 && splitted[2].trim().split(' ').length === 5) {
      this.setState({
        valid: true
      })
    }
  }

  handleText = event => {
    this.setState({
      text: event.target.value,
    }, this.poem)
  }

  render() {
    if (this.state.valid === false){
      return (
        <div>
          <textarea rows="3" cols="60" value={this.state.text} onChange={this.handleText}/>
          <div id="poem-validation-error" style={{color: 'red'}}>This poem is not written in the right structure!</div>
        </div>
      );
    } else {
      return (
        <div>
          <textarea rows="3" cols="60" value={this.state.text} onChange={this.handleText}/>
        </div>
      );
    }
  }
}

export default PoemWriter;