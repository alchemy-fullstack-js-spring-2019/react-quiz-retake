import React from 'react';
import PropTypes from 'prop-types';

function TextSelector({ text }) {
  return <p>{text}</p>;
}

TextSelector.propTypes = {
  text: PropTypes.string.isRequired
};

export default TextSelector;
