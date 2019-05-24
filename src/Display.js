import React from 'react';
import PropTypes from 'prop-types';

function Display({ headerText, image, footerText }) {
  return (
    <div>
      <p>{headerText}</p>
      <img src={image || 'https://images.ecosia.org/An2PbD_aWxo5_5lkuaiDNB7sl-s=/0x390/smart/http%3A%2F%2Fi0.kym-cdn.com%2Fphotos%2Fimages%2Foriginal%2F001%2F178%2F872%2F3f4.jpg'}></img>
      <p>{footerText}</p>
    </div>
  );
}

Display.propTypes = {
  headerText: PropTypes.string,
  image: PropTypes.string,
  footerText: PropTypes.string
};

export default Display;

// Presentational/Functional component
// takes headerText, footerText and image props
// HINT: use two p tags and an img tag

