import React from 'react';
import PropTypes from 'prop-types';

function TextSelector({changeHandler, headerText, footerText, image}) {
  return (
    <div>
      <input type="text" name="headerText" value={headerText} onChange={changeHandler}></input>
      <input type="text" name="footerText" value={footerText} onChange={changeHandler}></input>
      <input type="text" name="image" value={image} onChange={changeHandler}></input>
    </div>
  )
}

TextSelector.propTypes = {
  changeHandler: PropTypes.func.isRequired,
  headerText: PropTypes.string.isRequired,
  footerText: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
}

export default TextSelector;