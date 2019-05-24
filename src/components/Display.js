import React from 'react';
import PropTypes from 'prop-types';

function Display({ text, bottomText, image }) {
  const styles = {
    width: '100px',
    height: '100px'
  };

  return (
    <div style={styles}>
      <p>{text}</p>
      <img src={image}></img>
      <p>{bottomText}</p>
    </div>
  );
}

Display.propTypes = {
  text: PropTypes.string.isRequired,
  bottomText: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
};

export default Display;
