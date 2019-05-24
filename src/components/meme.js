import React, { PureComponent } from 'react';

export default class Meme extends PureComponent {
    state = {
      image: [],
      headerText: [],
      footerText: [],
    };

    render() {

      return ( 
        <>
        <p2>Header</p2>
        <p2>Footer</p2>
        <p2>Image</p2>
        </>
      );
    }
}
