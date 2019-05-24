import React from 'react';
import PropTypes from 'prop-types';

function Display(headerText) {

  return (
    <section>
      <p>{headerText.headerText}</p>
      <img src={headerText.imageSrc} />
      <p>{headerText.footerText}</p>
    </section>
  );
}
Display.propTypes = {
  headerText: PropTypes.string.isRequired,
  footerText: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired
};

export default Display;
