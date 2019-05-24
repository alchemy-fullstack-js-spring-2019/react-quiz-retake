import React, { PureComponent } from 'react';
import CreateMeme from './CreateMeme';
import Displays from '../components/Displays';

export default class MemeList extends PureComponent {
  state = {
    memes: []
  }

  addMeme = meme => {
    this.setState(state => {
      return {
        memes: [...state.memes, meme]
      };
    });
  }

  render() {
    const { memes } = this.state;
    return (
      <>
      <CreateMeme addMeme={this.addMeme} />
      <Displays memes={memes} />
      </>
    );
  }
}
