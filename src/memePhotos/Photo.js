import React from 'react';
import PropTypes from 'prop-types';

function Photo({ photo }) {
  return <img src={photo} />;
}

Photo.PropTypes = {
  photo: PropTypes.string.isRequired
};

export default Photo;
