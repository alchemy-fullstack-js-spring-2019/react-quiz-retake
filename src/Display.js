import React from 'react';
import PropTypes from 'prop-types';

function Display({ header, image, footerText }) {
  return (
    <div>
      <p>{header}</p>
      <img src={image}></img>
      <p>{footerText}</p>
    </div>
  );
}

Display.propTypes = {
  header: PropTypes.string,
  image: PropTypes.string,
  footerText: PropTypes.string
};

export default Display;

// Presentational/Functional component
// takes headerText, footerText and image props
// HINT: use two p tags and an img tag

