import React from 'react';
import PropTypes from 'prop-types';

function TextSelector({ text, bottomText, image, handleChange }) {
  const imageStyle = {
    height: '250px',
    width: '250px'
  };
  
  return (
    <>
      <input name="text" value={text} onChange={handleChange} />
      <input name="image" type="text" value={image} onChange={handleChange} />
      <input name="bottomText" value={bottomText} onChange={handleChange} />
    </>
  );
}

TextSelector.propTypes = {
  image: PropTypes.string.isRequired,
  bottomText: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired
}

export default TextSelector;
