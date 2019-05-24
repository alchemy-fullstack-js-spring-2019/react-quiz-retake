import React from 'react';
import PropTypes from 'prop-types';

function Display() {
  return (
    <div></div>
  );
}

Display.propTypes = {
  header: PropTypes.element.isRequired,
  image: PropTypes.image.isRequired,
  footer: PropTypes.element.isRequired
};

export default Display;
