import React from 'react';
import PropTypes from 'prop-types';

function Display({ headerText, footerText, image }) {
  const styling = {
    width: '200px',
    height: '200px',
  };

  return (
    <div style={styling}>
      <p>{headerText}</p>
      <img src={image} />
      <p>{footerText}</p>
    </div>
  );
}

Display.propTypes = {
  headerText: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  footerText: PropTypes.string.isRequired,
};

export default Display;
