import React, { PureComponent } from 'react';
import Display from '../components/Display';
import TextSelector from '../components/TextSelector';

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
    return (
      <>
        <TextSelector 
          headerText={this.state.headerText} 
          footerText={this.state.footerText} 
          image={this.state.image} 
          handleChange={this.handleChange} 
        />
        <Display
          headerText={this.state.headerText} 
          footerText={this.state.footerText} 
          image={this.state.image}
        />
      </>
    )
  }

}
