import React, { PureComponent } from 'react';
import TextSelector from '../components/TextSelector';
import Display from '../components/Display';

export default class Meme extends PureComponent {
  state = {
    headerText: '',
    footerText: '',
    image: ''
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  render() {
    const {  headerText, footerText, image } = this.state;
    return (
      <>
      <TextSelector headerText={headerText} footerText={footerText} image={image} handleChange={this.handleChange} />
      <Display headerText={headerText} footerText={footerText} image={image} img="../../assets/meme.jpg" />
      </>
    );
  }
}
