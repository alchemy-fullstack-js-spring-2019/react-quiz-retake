import React, { PureComponent } from 'react';
import TextSelector from '../components/TextSelector';
import Display from '../components/Display';

export default class Meme extends PureComponent {
  state = {
    imageUrl: '',
    topText: '',
    bottomText: ''
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  render() {
    const { imageUrl, topText, bottomText } = this.state;
    return (
      <>
      <TextSelector
        imageUrl={imageUrl} 
        topText={topText} 
        bottomText={bottomText} 
        handleChange={this.handleChange} 
      />
      <Display
        imageUrl={imageUrl}
        topText={topText}
        bottomText={bottomText}
      />
      </>
    );
  }
}


