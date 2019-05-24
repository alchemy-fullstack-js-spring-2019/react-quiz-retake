//takes headerText
//takes footerText
//takes image prop

import React from 'react';
import PropTypes from 'prop-types';

function Display({ headerText, image, footerText }) {
  
  return (
    <div>
      <p>{headerText}</p>
      <img src={image} />
      <p>{footerText}</p>
    </div>
  );
}

Display.propTypes = {
  headerText: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  footerText: PropTypes.string.isRequired
};

export default Display;
