import React from 'react';
import PropTypes from 'prop-types';

function TextSelector({ header, image, footer, handleChange }) {
  return (
    <div style={{ 
      textAlign: 'center',
    }}>
      <input name="header" value={header} onChange={handleChange} style={{ margin: '5px' }} />
      <input name="image" value={image} onChange={handleChange} style={{ margin: '5px' }} />
      <input name="footer" value={footer} onChange={handleChange} style={{ margin: '5px' }} />
    </div>
  );
}

TextSelector.propTypes = {
  header: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  footer: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired
};

export default TextSelector;
