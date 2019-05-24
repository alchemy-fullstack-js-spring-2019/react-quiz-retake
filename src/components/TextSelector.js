import React from 'react';
import PropTypes from 'prop-types';

export default function TextSelector({ headerText, footerText, image, handleChange }) {
  return (
    <>
    <label htmlFor="headerText">Meme Header:</label>
    <input name="headerText" type="text" value={headerText} onChange={handleChange}/>
    <label htmlFor="footerText">Meme Footer:</label>
    <input name="footerText" type="text" value={footerText} onChange={handleChange}/>
    <label htmlFor="image">Image URL:</label>
    <input name="image" type="text" value={image} onChange={handleChange}/>
    </>
  );
}

TextSelector.propTypes = {
  headerText: PropTypes.string.isRequired,
  footerText: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired
};
