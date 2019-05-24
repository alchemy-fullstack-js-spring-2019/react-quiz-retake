import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

function TextSelector({ headerText, img, footerText, handleChange }) {
  return (
    <>
      <input name="headerText" type="text" value={headerText} onChange={handleChange} />
      <input name="img" type="text" value={img} onChange={handleChange} />
      <input name="footerText" type="text" value={footerText} onChange={handleChange} />
    </>
  );
}

TextSelector.propTypes = {
  headerText: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  footerText: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired
};

export default TextSelector;
