import React from 'react';
import PropTypes from 'prop-types';

function HeaderSelector({ headerText, headerChange }) {
  return (
    <input 
      name="headerText"
      type="text"
      value={headerText}
      onChange={headerChange}
    />
  );
}

HeaderSelector.propTypes = {
  headerText: PropTypes.string,
  headerChange: PropTypes.func
};

export default HeaderSelector;
