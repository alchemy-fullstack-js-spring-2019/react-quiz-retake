import React from 'react';
import PropTypes from 'prop-types';

function Display({ headerText, footerText, image }) {
  return (
    <>
        <p>{headerText}</p>
        <img src={image} />
        <p>{footerText}</p>
    </>
  );
}

Display.propTypes = {
  headerText: PropTypes.string.isRequired,
  footerText: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
};

export default Display;
