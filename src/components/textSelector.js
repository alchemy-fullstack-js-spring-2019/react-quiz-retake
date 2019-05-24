import React from 'react';
import PropTypes from 'prop-types';

function textSelector({ image, headerText, footerText }) {
  return ( 
    <>
    <input name="headerText" type="text" value={headerText} />
    <input name="footerText" type="text" value={footerText} />
    <input name="image" type="url" value={image} />
    
    </>
  );   
}

textSelector.propTypes = {
  image: PropTypes.string.isRequired,
  headerText: PropTypes.string.isRequired,
  footerText: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired
}
;

export default textSelector;
