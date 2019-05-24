import React from 'react';
import PropTypes from 'prop-types';

function TextSelector({ imageUrl, topText, bottomText, handleChange }) {
  return (
    <>
      <input name="imageUrl" value={imageUrl} placeholder="Image Url" onChange={handleChange} />
      <input name="topText" value={topText} placeholder="Top Text" onChange={handleChange} />
      <input name="bottomText" value={bottomText} placeholder="bottomText" onChange={handleChange} />
    </>
  );
}

TextSelector.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  topText: PropTypes.string.isRequired,
  bottomText: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired
};

export default TextSelector;
