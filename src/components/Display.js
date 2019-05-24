import React from 'react';
import PropTypes from 'prop-types';

function Display({ headerText, footerText, img }) {
  const imgStyle = {
    width: '250px',
    height: '250px'
  };

  return (
    <section>
      <h2>{headerText}</h2>
      <img src={img} style={imgStyle} />
      <h2>{footerText}</h2>
    </section>
  )
}

Display.propTypes = {
  img: PropTypes.string.isRequired,
  headerText: PropTypes.string.isRequired,
  footerText: PropTypes.string.isRequired
};

export default Display;
