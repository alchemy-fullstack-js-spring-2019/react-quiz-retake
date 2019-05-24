import React from 'react';
import PropTypes from 'prop-types';

function Display({ imageUrl, topText, bottomText }) {
  return (
    <section style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h1>{topText}</h1> 
      <img src={imageUrl} style={{ width: '400px' }} />
      <h1>{bottomText}</h1>
    </section>
  );
}

Display.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  topText: PropTypes.string.isRequired,
  bottomText: PropTypes.string.isRequired
};

export default Display;
