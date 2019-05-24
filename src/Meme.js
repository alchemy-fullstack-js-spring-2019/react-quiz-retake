import React, { PureComponent } from 'react';
import PropType from 'prop-types';
import TextSelector from '';
import Display from '';

export default class Meme extends PureComponent {
  state = {
    header: 'Meme Generator',
    image: 'https://images.ecosia.org/An2PbD_aWxo5_5lkuaiDNB7sl-s=/0x390/smart/http%3A%2F%2Fi0.kym-cdn.com%2Fphotos%2Fimages%2Foriginal%2F001%2F178%2F872%2F3f4.jpg',
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
