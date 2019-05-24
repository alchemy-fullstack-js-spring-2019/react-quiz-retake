import React, { PureComponent } from 'react';
import TextSelector from '../components/TextSelector';
import Display from '../components/Display';

export default class Meme extends PureComponent {
  state = {
    headerText: '',
    imgSource: '',
    footerText: '',
  }

  changeHandler = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }
  
  render(){
    const { headerText, footerText, imgSource } = this.state;
    return (
    <>
      <TextSelector changeHandler={this.changeHandler} headerText={headerText} footerText={footerText} imgSource={imgSource}/>
      <Display headerText={headerText} footerText={footerText} imgSource={imgSource} />
    </>
    );
  }
}
