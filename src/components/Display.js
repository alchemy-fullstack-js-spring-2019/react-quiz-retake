import React from 'react';
import PropTypes from 'prop-types';

function Display(headerText) {


  return (
    <section style={{ textAlign: 'center' }}>
      <p style={{ textTransform: 'uppercase', fontSize: '42px', fontWeight: 'bolder', fontFamily: 'sans-serif' }}>{headerText.headerText}</p>
      <img style={{ width: '300px' }} src={headerText.imageSrc} />
      <p style={{ textTransform: 'uppercase', fontSize: '42px', fontWeight: 'bolder', fontFamily: 'sans-serif' }}>{headerText.footerText}</p>
    </section>
  );
}
Display.propTypes = {
  headerText: PropTypes.string.isRequired,
  footerText: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired
};

export default Display;
