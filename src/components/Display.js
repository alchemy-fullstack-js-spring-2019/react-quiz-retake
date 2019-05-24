import React from 'react';
import PropTypes from 'prop-types';

function Display({ headerText, footerText, imgSource }){
  return (
    <>
      <span>{headerText}</span>
      <img src={imgSource}></img>
      <span>{footerText}</span>
    </>
  );
}

Display.propTypes = {
  headerText: PropTypes.string.isRequired,
  footerText: PropTypes.string.isRequired,
  imgSource: PropTypes.string.isRequired
};

export default Display;
