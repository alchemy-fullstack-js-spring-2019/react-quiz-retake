import React, { PureComponent } from 'react';
import TextSelector from '../components/TextSelector';
import Display from '../components/Display';

export default class Meme extends PureComponent {
  state = {
    headerText: 'Billy',
    imgSource: 'https://www.musicfestnews.com/wp-content/uploads/2018/10/billy-strings-festy9-festy-experience-jody-carbone-photos-2018-10-07-93.jpg',
    footerText: 'Memes',
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
