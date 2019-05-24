import React from 'react';
import PropTypes from 'prop-types';

function TextSelector({ headerText, footerText, image, handleChange }) {
  return (
    <>
    Header: <input name="headerText" type="text" value={headerText} onChange={handleChange} />
    Image: <input name="image" type="text" value={image} onChange={handleChange} />
    footerText: <input name="image" type="text" value={footerText} onChange={handleChange} />
    </> 
  );
}

TextSelector.propTypes = {
  headerText: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  footerText: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired
};

export default TextSelector;
