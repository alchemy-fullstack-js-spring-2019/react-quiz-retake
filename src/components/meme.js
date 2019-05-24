import React, { PureComponent } from 'react';
import Display from './Display';
export default class Meme extends PureComponent {
    state = {
      image: [],
      headerText: [],
      footerText: [],
    };

    render() {

      return ( 
        <>
        <p2>TextSelector</p2>
        <Display />
        </>
      );
    }
}
