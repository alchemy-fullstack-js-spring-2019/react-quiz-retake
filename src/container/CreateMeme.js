import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class CreateMeme extends PureComponent {
  static propTypes = {
    addMeme: PropTypes.func.isRequired
  };
  
  state = {
    headerText: 'enter a header',
    footerText: 'and a footer',
    image: 'and an image url'
  }

  handleSubmit = event => {
    event.preventDefault();
    const { headerText, footerText, image } = this.state;

    this.props.addMeme({ headerText, footerText, image });
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  render() {
    const { headerText, footerText, image } = this.state;
    return (
      <>
      <h1>make a super basic meme</h1>
      <p>enter words, click button!</p>
      <form onSubmit={this.handleSubmit}>
        <input type="text" name="headerText" value={headerText} onChange={this.handleChange}></input>
        <input type="text" name="footerText" value={footerText} onChange={this.handleChange}></input>
        <input type="text" name="image" value={image} onChange={this.handleChange}></input>
        <button>Submit!</button>
      </form>
      </>
    );
  }
}
