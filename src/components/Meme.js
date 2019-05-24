import React, { PureComponent } from 'react';
import TextSelector from './TextSelector';
import Display from './Display';

export default class Meme extends PureComponent {
  state= {
    headerText: 'hard header',
    image: 'https://loremflickr.com/320/240/dog',
    footerText: 'hard footer'
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name ]: target.value });
  }

  render() {
    const { headerText, image, footerText } = this.state;
    return (
      //here I'm not getting the data to go to the right places. 
      <>
        <TextSelector name="headerText" value={headerText} text={headerText} handleChange={this.handleChange} />
        <TextSelector name="image" value={image} text={image} handleChange={this.handleChange} />
        <TextSelector name="footerText" text={footerText} handleChange={this.handleChange} />
        <Display headerText={headerText} image={image} footerText={footerText} />
      </>
    );
  }
}
