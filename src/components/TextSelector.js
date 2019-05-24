import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

function TextSelector({ text, handleChange }) {
  return (
    <input
    name="text"
    type="text"
    value={text}
    onChange={handleChange}
    />
  );
}

TextSelector.propTypes = {
  text: PropTypes.string.isRequired,
  handleChange: PropTypes.string.isRequired
};

export default TextSelector;
