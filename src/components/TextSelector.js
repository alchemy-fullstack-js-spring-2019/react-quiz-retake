import React from 'react';
import PropTypes from 'prop-types';

function TextSelector({ headerText, image, footerText, handleChange }) {
  const style = {
    margin: '10px'
  };
  return (
    <>
    Header: <input style={style}name="headerText" type="text" value={headerText} onChange={handleChange}/>
      <br></br>
    Image: <input style={style} name="image" type="text" value={image} onChange={handleChange}/>
      <br></br>
    Footer: <input style={style} name="footerText" type="text" value={footerText} onChange={handleChange}/>
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
