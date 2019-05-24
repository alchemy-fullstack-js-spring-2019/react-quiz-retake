import React from 'react';
import PropTypes from 'prop-types';

function TextSelector({ state, handleChange }) {
  return (
    <>
      <input type="text" name="headerText" value={state.headerText} placeholder="Header Text" onChange={handleChange}/>
      <input type="text" name="footerText" value={state.footerText} placeholder="Footer Text" onChange={handleChange}/>
      <input type="text" name="image" value={state.image} placeholder="Image Url" onChange={handleChange}/>
    </>
  );
}

TextSelector.propTypes = {
  state: PropTypes.shape({
    headerText: PropTypes.string.isRequired,
    footerText: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
  }).isRequired,
  handleChange: PropTypes.func.isRequired
};

export default TextSelector;
