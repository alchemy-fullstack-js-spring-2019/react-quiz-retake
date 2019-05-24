import React from 'react';
import PropTypes from 'prop-types';

function Display({ meme }) {
  return (
    <>
      <p>{meme.headerText}</p>
      <img src={meme.image} />
      <p>{meme.footerText}</p>
    </>
  );
}

Display.propTypes = {
  meme: PropTypes.shape({
    headerText: PropTypes.string.isRequired,
    footerText: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
  }).isRequired
};

export default Display;
