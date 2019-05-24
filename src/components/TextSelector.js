import React from 'react';
import PropTypes from 'prop-types';

function TextSelector({ handleHeaderChange, handleFooterChange, handleImageSrcChange }) {
  return (
    <form>
      <label>
        Header Text: <input onChange={handleHeaderChange}></input>
      </label>
      <label>
        Footer Text: <input onChange={handleFooterChange}></input>
      </label>
      <label>
        Image Src: <input onChange={handleImageSrcChange}></input>
      </label>
    </form>
  );
}
TextSelector.propTypes = {
  handleHeaderChange: PropTypes.func.isRequired,
  handleFooterChange: PropTypes.func.isRequired,
  handleImageSrcChange: PropTypes.func.isRequired
};

export default TextSelector;
