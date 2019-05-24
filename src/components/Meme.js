import React, { PureComponent } from 'react';
import { HeaderText, FooterText } from './TextSelector';
// import TextSelectoriu from './TextSelector';

export default class Meme extends PureComponent {
  state = {
    headerText: '',
    image: 'https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwiCuJHzzLTiAhXnh1QKHa3BDekQjRx6BAgBEAU&url=https%3A%2F%2Fpreetkamal.com%2F34-very-funny-friday-meme-that-definitely-make-you-smile%2F&psig=AOvVaw2g6JAuHhQLAZoPQR0AcXCa&ust=1558802213391446',
    footerText: ''
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  render() {
    const { headerText, image, footerText } = this.state;

    return (
      <div>
        <HeaderText text={headerText} handleChange={this.handleChange}/>
        <img alt="Friday meme">{image}</img>
        <FooterText text={footerText} handleChange={this.handleChange}/>
      </div>
    );
  }
}
