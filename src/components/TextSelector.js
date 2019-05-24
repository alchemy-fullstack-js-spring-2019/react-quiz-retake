import React from 'react';
import PropTypes from 'prop-types';

function TextSelector({ name, text, handleChange }) {
  return (
    <input name={name} type="text" value={text} onChange={handleChange} />
  );
}

TextSelector.propTypes = {
  text: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired
};

export default TextSelector;
