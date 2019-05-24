import React, { Component } from 'react';
import TextSelector from '';
import Display from '';

const image1 = 'https://images.ecosia.org/An2PbD_aWxo5_5lkuaiDNB7sl-s=/0x390/smart/http%3A%2F%2Fi0.kym-cdn.com%2Fphotos%2Fimages%2Foriginal%2F001%2F178%2F872%2F3f4.jpg';
const header1 = 'Meme Generator';

export default class Meme extends Component {
  state = {
    header: header1,
    image: image1,
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
