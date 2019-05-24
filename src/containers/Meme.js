import React, { PureComponent } from 'react';
import TextSelector from '../components/TextSelector';
import Display from '../components/Display';

export default class Meme extends PureComponent {
  state = {
    header: '',
    image: '',
    footer: ''
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };
  
  render() {
    const { header, image, footer } = this.state;

    return (
      <h1>h1</h1>
    );
  }
}
