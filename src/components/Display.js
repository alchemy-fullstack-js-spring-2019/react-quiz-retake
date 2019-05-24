import React from 'react';
import PropTypes from 'prop-types';

function Display({ headerText, footerText, imgSource }){
  return (
    <>
      <br />
      <h2>{headerText}</h2>
      <br />
      <img src={imgSource} style={{ width: '40vw' }}></img>
      <br />
      <h2>{footerText}</h2>
    </>
  );
}

Display.propTypes = {
  headerText: PropTypes.string.isRequired,
  footerText: PropTypes.string.isRequired,
  imgSource: PropTypes.string.isRequired
};

export default Display;
