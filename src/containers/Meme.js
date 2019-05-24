import React, { PureComponent } from 'react';
import TextSelector from '../components/TextSelector';
import Display from '../components/Display';

export default class Meme extends PureComponent {
  state = {
    header: 'billy',
    image: 'https://s3-us-east-2.amazonaws.com/tattoo-media/wp-content/uploads/2018/10/22135523/billy-strings1.jpg',
    footer: 'strings'
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };
  
  render() {
    const { header, image, footer } = this.state;

    return (
      <>
        <TextSelector header={header} image={image} footer={footer} handleChange={this.handleChange} />
        <Display header={header} image={image} footer={footer} />
      </>
    );
  }
}
