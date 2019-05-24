import React, { Component } from 'react';
import TextSelector from './TextSelector';
import Display from './Display';

export default class Meme extends Component {
  state = {
    headerText: 'Header Here, Image URL ->',
    image: '',
    footerText: 'Enter Your Meme Here'
  }
  
  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }
  
  render() {
    const { headerText, image, footerText } = this.state;
    return (
      <>
        <TextSelector
          headerText={headerText}
          image={image}
          footerText={footerText}
          handleChange={this.handleChange}
        />
        <Display
          headerText={headerText}
          image={image}
          footerText={footerText}
        />
        <p>Some More Example Image URLs: </p>
        <ul>
          <li>
            <h5>https://tse3.mm.bing.net/th?id=OIP.wNzLFdJrS4WEijtMkpZhFAAAAA&pid=Api</h5>
            <img src="https://tse3.mm.bing.net/th?id=OIP.wNzLFdJrS4WEijtMkpZhFAAAAA&pid=Api" />
          </li>
          <li>
            <h5>https://tse3.mm.bing.net/th?id=OIP.eZWLkxZHQ7jjMdlMiHo02AHaK6&pid=Api</h5>
            <img src="https://tse3.mm.bing.net/th?id=OIP.eZWLkxZHQ7jjMdlMiHo02AHaK6&pid=Api" />
          </li>
        </ul>
      </>
    );
  }
}

// Container component
// contains state
// Uses the other components
