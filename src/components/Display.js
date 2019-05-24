import React from 'react';
import PropTypes from 'prop-types';

function Display({ header, image, footer }) {
  const styles = {
    fontFamily: 'Impact',
    textAlign: 'center',
    fontSize: '3em',
    textTransform: 'uppercase',
    lineHeight: '0'
  };

  return (
    <div style={styles}>
      <p>{header}</p>
      <img src={image} style={{ width: '600px' }} />
      <p>{footer}</p>
    </div>
  );
}

Display.propTypes = {
  header: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  footer: PropTypes.string.isRequired,
};

export default Display;
