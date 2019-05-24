import React from 'react';
import PropTypes from 'prop-types';

function Display({ header, image, footer }) {
  const styles = {
    fontFamily: 'Impact',
    textAlign: 'center',
    fontSize: '4em',
    textTransform: 'uppercase',
    lineHeight: '0',
    color: '#FFFFFF',
    letterSpacing: '.03em',
    position: 'relative',
    bottom: '50px'
  };

  return (
    <div style={styles}>
      <p style={{
        position: 'relative',
        top: '100px',
        textShadow: '-2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000'
      }}>{header}</p>
      <img src={image} style={{ width: '600px' }} />
      <p style={{
        position: 'relative',
        bottom: '100px',
        textShadow: '-2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000'
      }}>{footer}</p>
    </div>
  );
}

Display.propTypes = {
  header: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  footer: PropTypes.string.isRequired,
};

export default Display;
