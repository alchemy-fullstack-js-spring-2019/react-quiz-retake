import React from 'react';
import PropTypes from 'prop-types';

function Display({ headerText, footerText, image }) {
  return (
    <div>
      <p>{headerText}</p>
      <img src={image}></img>
      <p>{footerText}</p>
    </div>
  );
}

Display.propTypes = {
  headerText: PropTypes.string.isRequired,
  footerText: PropTypes.string.isRequired,
  image: PropTypes.any.isRequired
};

export default Display;
