import React from 'react';
import PropTypes from 'prop-types';

function TextSelector({changeHandler, headerText, footerText, image}) {
  return (
    <div>
      <input type="text" name="headerText" value={headerText} onChange={({ target }) => changeHandler(target.value)}></input>
      <input type="text" name="footerText" value={footerText} onChange={({ target }) => changeHandler(target.value)}></input>
      <input type="text" name="image" value={image} onChange={({ target }) => changeHandler(target.value)}></input>
    </div>
  )
}

TextSelector.propTypes = {
  changeHandler: PropTypes.func.isRequired,
  header: PropTypes.string.isRequired,
  footer: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
}

export default TextSelector;