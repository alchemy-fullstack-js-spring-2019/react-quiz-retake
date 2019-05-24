import React from 'react';
import PropTypes from 'prop-types';

function Display({ headerText, image, footerText }) {
  return (
    <div>
      <p>{headerText}</p>
      <img src={image}></img>
      <p>{footerText}</p>
    </div>
  );
}

Display.propTypes = {
  headerText: PropTypes.string,
  image: PropTypes.string,
  footerText: PropTypes.string
};

export default Display;

// Presentational/Functional component
// takes headerText, footerText and image props
// HINT: use two p tags and an img tag

