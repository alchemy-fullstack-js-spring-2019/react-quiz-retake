import React, { PureComponent } from 'react';
import TextSelector from './TextSelector';
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
        <TextSelector text={headerText} handleChange={this.handleChange}/>
        <img alt="Friday meme">{image}</img>
        <TextSelector text={footerText} handleChange={this.handleChange}/>
      </div>
    );
  }
}
