import React from 'react';
import PropTypes from 'prop-types';

function TextSelector({ footerText, image, headerText, handleChange }) {
  return (
    <>
      <input 
      name="headerText"
      type="text"
      value={headerText}
      onChange={handleChange}
      />
      <input 
      name="image"
      type="text"
      value={image}
      onChange={handleChange}
      />
      <input 
        name="footerText"
        type="text"
        value={footerText}
        onChange={handleChange}
      />
    </>
  );
}

TextSelector.propTypes = {
  headerText: PropTypes.string,
  image: PropTypes.string,
  footerText: PropTypes.string,
  handleChange: PropTypes.func
};

export default TextSelector;

// Container component
// contains state
// Uses the other components
