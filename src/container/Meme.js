import React, { PureComponent } from 'react';
import TextSelector from '../components/TextSelector';
import Display from '../components/Display';

export default class Meme extends PureComponent {
  state = {
    img: '',
    headerText: '',
    footerText: ''
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  render () {
    const { img, headerText, footerText } = this.state;
    return (
      <>
        <TextSelector
          img={img}
          headerText={headerText}
          footerText={footerText}
          handleChange={this.handleChange}
        />
        <Display
          img={img}
          headerText={headerText}
          footerText={footerText}
        />
      </>
    );
  }
}
