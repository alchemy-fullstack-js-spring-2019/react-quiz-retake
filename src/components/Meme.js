import React, { PureComponent } from 'react';
import TextSelector from './TextSelector';
import Display from './Display';

export default class Meme extends PureComponent {
    state = {
      headerText: '',
      footerText: '',
      imageSrc: ''
    }

    handleHeaderChange = ({ target }) => {
      this.setState({ headerText: target.value });
    }

    handleFooterChange = ({ target }) => {
      this.setState({ footerText: target.value });
    }

    handleImageSrcChange = ({ target }) => {
      this.setState({ imageSrc: target.value });
    }

    render() {
      const { headerText, footerText, imageSrc } = this.state;
      return (
          <>
        <TextSelector handleHeaderChange={this.handleHeaderChange} handleFooterChange={this.handleFooterChange} handleImageSrcChange={this.handleImageSrcChange}/>
        <Display headerText={headerText} footerText={footerText} imageSrc={imageSrc} />
        </>
      );
    }

}
