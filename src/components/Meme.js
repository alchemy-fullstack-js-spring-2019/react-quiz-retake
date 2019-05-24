import React, { PureComponent } from 'react';
import { headerText, footerText } from './TextSelector';
import Display from './Display';

export default class Meme extends PureComponent {
  state = {
    headerText: '',
    image: 'http://preetkamal.com/wp-content/uploads/2019/03/Friday-Meme-Friday-Is-My-Second.jpg',
    footerText: ''
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  render() {
    const { headerText, image, footerText } = this.state;

    return (
      <div>
        <Display text={headerText} handleChange={this.handleChange}/>
        <img alt="Friday meme">{image}</img>
        <Display text={footerText} handleChange={this.handleChange}/>
      </div>
    );
  }
}
