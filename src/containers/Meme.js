import React, { PureComponent } from 'react';
import TextSelector from '../components/TextSelector';

export default class Meme extends PureComponent {
  state = {
    text: '',
    image: '',
    bottomText: ''
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  render() {
    const { text } = this.state;
    return (
      <>
        <TextSelector
          text={text}
          handleChange={this.handleChange}
        />
      </>
    );
  }
}
