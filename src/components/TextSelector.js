import React from 'react';
import PropTypes from 'prop-types';

function TextSelector({ headerText, footerText, image, handleChange }) {
  return (
    <>
      <input
        name="headerText"
        type="text"
        value={headerText}
        onChange={handleChange}
      />

      <input
        name="footerText"
        type="text"
        value={footerText}
        onChange={handleChange}
      />

      <input
        name="image"
        type="text"
        value={image}
        onChange={handleChange}
      />
    </>
  );
}

TextSelector.propTypes = {
  headerText: PropTypes.string.isRequired,
  footerText: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired
};

export default TextSelector;
