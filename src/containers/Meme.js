import React, { PureComponent } from 'react';
import TextSelector from '../components/TextSelector';
import Display from '../components/Display';


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
    const { text, image, bottomText } = this.state;
    return (
      <>
        <TextSelector
          text={text}
          bottomText={bottomText}
          image={image}
          handleChange={this.handleChange}
        />
        <Display text={text} image={image} bottomText={bottomText}/>
      </>
    );
  }
}
