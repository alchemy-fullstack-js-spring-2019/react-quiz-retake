import React, { PureComponent } from 'react';
import Display from './Display';
import TextSelector from './textSelector';
export default class Meme extends PureComponent {
    state = {
      image: '',
      headerText: '',
      footerText: '',
    };

    handleChange = ({ target }) => {
      this.setState({ [target.name]: target.value });
    }

    handleSubmit = () => {
      const memeheaderText = this.state.headerText;
      const memefooterText = this.state.footerText;
      const memeImage = this.state.image;

    }

    render() {
      const { memefooterText, memeheaderText, memeImage } = this.state;

      return ( 
        <>
        <TextSelector />
        <Display footerText={memefooterText} headerText={memeheaderText} image={memeImage}  />
        </>
      );
    }
}
