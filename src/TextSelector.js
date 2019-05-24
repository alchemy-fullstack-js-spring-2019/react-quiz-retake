import React from 'react';
import PropTypes from 'prop-types';

function TextSelector({ footerText, handleChange }) {
  return (
    <input 
      name="footerText"
      type="text"
      value={footerText}
      onChange={handleChange}
    />
  );
}

TextSelector.propTypes = {
  footerText: PropTypes.string,
  handleChange: PropTypes.func
};

export default TextSelector;

// Container component
// contains state
// Uses the other components
