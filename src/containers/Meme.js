import React, { PureComponent } from 'react';
import TextSelector from '../components/TextSelector';
import Display from '../components/Display';


export default class TextFormatter extends PureComponent {

  state = {
    headerText: '', 
    footerText: '',
    image: ''
  };

    handleChange = ({ target }) => {
      this.setState({ [target.name]: target.value });
    }

    render() {
      return (
        <>
          <TextSelector state={this.state} handleChange={this.handleChange} />
          <Display meme={this.state} />
        </>
      );
    }
}
