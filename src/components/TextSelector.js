import React from 'react';
import PropTypes from 'prop-types';

function TextSelector({ changeHandler, headerText, footerText, imgSource }){
  return (
    <>
      <span>Enter Header Text</span>
      <input name="headerText" type="text" value={headerText} onChange={changeHandler} />
      <span>Enter Image URL</span>
      <input name="imgSource" type="text" value={imgSource} onChange={changeHandler} />
      <span>Enter Footer Text</span>
      <input name="footerText" type="text" value={footerText} onChange={changeHandler} />
    </>
  );
}

TextSelector.propTypes = {
  headerText: PropTypes.string.isRequired,
  imgSource: PropTypes.string.isRequired,
  footerText: PropTypes.string.isRequired,
  changeHandler: PropTypes.func.isRequired,
};

export default TextSelector;

