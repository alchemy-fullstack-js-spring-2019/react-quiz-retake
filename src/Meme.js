import React, { Component } from 'react';
import TextSelector from '';
import Display from '';

export default class Meme extends Component {
  state = {
    header: '',
    image: '',
    footerText: ''
  }
  
  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }
  
  render() {
    const { header, image, footerText } = this.state;
    return (
      <>
        <TextSelector
          footerText={footerText}
          handleChange={this.handleChange}
        />
        <Display
          header={header}
          image={image}
          footerText={footerText}
        />
      </>
    );
  }
}

// Container component
// contains state
// Uses the other components
