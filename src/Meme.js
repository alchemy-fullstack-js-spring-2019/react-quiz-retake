import React, { Component } from 'react';
import TextSelector from './TextSelector';
import Display from './Display';

// I really wanted to display a default image but I was wasting too much time on it :-)
// const imageHandler = function() {
//   if(image === '') {
//     return image = 'https://images.ecosia.org/An2PbD_aWxo5_5lkuaiDNB7sl-s=/0x390/smart/http%3A%2F%2Fi0.kym-cdn.com%2Fphotos%2Fimages%2Foriginal%2F001%2F178%2F872%2F3f4.jpg';
//   } else {
//     return image;
//   }
// }

export default class Meme extends Component {
  state = {
    headerText: 'Header Here, Image URL ->',
    // image: imageHandler,
    image: 'Insert Image URL Here',
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
        <p>Some Example Image URLs: </p>
        <ul>
          <li>
            <h5>https://images.ecosia.org/An2PbD_aWxo5_5lkuaiDNB7sl-s=/0x390/smart/http%3A%2F%2Fi0.kym-cdn.com%2Fphotos%2Fimages%2Foriginal%2F001%2F178%2F872%2F3f4.jpg</h5>
            <img src="https://images.ecosia.org/An2PbD_aWxo5_5lkuaiDNB7sl-s=/0x390/smart/http%3A%2F%2Fi0.kym-cdn.com%2Fphotos%2Fimages%2Foriginal%2F001%2F178%2F872%2F3f4.jpg" />
          </li>
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
