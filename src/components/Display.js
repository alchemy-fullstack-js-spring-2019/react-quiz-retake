import React from 'react';
import PropTypes from 'prop-types';

function Display(headerText) {

  const textStyles = {
    textTransform: 'uppercase',
    fontSize: '42px',
    fontWeight: 'bolder',
    fontFamily: 'sans-serif'
  };


  return (
    <section style={{ textAlign: 'center' }}>
      <p style={textStyles}>{headerText.headerText}</p>
      <img style={{ width: '300px' }} src={headerText.imageSrc} />
      <p style={textStyles}>{headerText.footerText}</p>
    </section>
  );
}
Display.propTypes = {
  headerText: PropTypes.string.isRequired,
  footerText: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired
};

export default Display;
