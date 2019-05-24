import React, { PureComponent } from 'react';
import Display from '../components/Display';
import TextSelector from '../components/TextSelector';

export default class Meme extends PureComponent {
  state = {
    headerText: 'Make a',
    footerText: 'cool meme!',
    image: 'https://njmom.com/wp-content/uploads/2019/01/iStock-532529153.jpg'
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  render() {
    const { headerText, footerText, image } = this.state;
  
    return (
      <>
      <TextSelector headerText={headerText} footerText={footerText} image={image} handleChange={this.handleChange}/>
      <Display headerText={headerText} footerText={footerText} image={image}/>
      </>
    );
  }
}
