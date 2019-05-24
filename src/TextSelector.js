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
  footerText: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired
};

export default TextSelector;

// Container component
// contains state
// Uses the other components
