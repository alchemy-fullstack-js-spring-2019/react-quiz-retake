import React from 'react';
import PropTypes from 'prop-types';

function TextSelector({ headerText, footerText, image, handleChange }) {

  return (
    <>
      <input type="text" name="headerText" value={headerText} onChange={handleChange} placeholder={'Header Text'}/>
      <input type="text" name="image" value={image} onChange={handleChange} placeholder={'image url'} />
      <input type="text" name="footerText" value={footerText} onChange={handleChange} placeholder={'Footer Text'}/>
    </>
  )

}

TextSelector.propTypes = {
  headerText: PropTypes.string.isRequired,
  footerText: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired
};

export default TextSelector;
