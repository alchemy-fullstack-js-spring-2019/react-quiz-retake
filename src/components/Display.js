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
      <p>hi</p>
      <img src="https://s3-us-east-2.amazonaws.com/tattoo-media/wp-content/uploads/2018/10/22135523/billy-strings1.jpg" style={{ width: '600px' }} />
      <p>bye</p>
    </div>
  );
}

Display.propTypes = {
  header: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  footer: PropTypes.string.isRequired,
};

export default Display;
