import React, { PureComponent } from 'react';
import TextSelector from './TextSelector';
import Display from './Display';

export default class Meme extends PureComponent {
  state= {
    headerText: '',
    image: '',
    footerText: 'ender'
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name ]: target.value });
  }

  render() {
    const { headerText, image, footerText } = this.state;
    return (
      <>
        <TextSelector name="headerText" text={headerText} handleChange={this.handleChange} />
        <TextSelector name="image" text={image} handleChange={this.handleChange} />
        <TextSelector name="footerText" text={footerText} handleChange={this.handleChange} />
        <Display headerText={headerText} image={image} footerText={footerText} />
      </>
    );
  }
}
