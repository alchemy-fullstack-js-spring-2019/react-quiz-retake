import React from 'react';
import PropTypes from 'prop-types';

function textSelector({ headerText, footerText, image }) {
  return (
     <>
        <input onChange={headerChange} type="text" name="headerText" value={headerText} />
        <input onChange={footerChange} type="text" name="headerText" value={footerText} />
        <input onChange={imageChange} type="text" name="headerText" value={image} />
        <button onClick={handleSubmit}>Submit</button>
        
     </>
  );   
}

textSelector.propTypes = {
  headerText: PropTypes.string.isRequired,
  footerText: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  
  headerChange: PropTypes.string.isRequired,
  footerChange: PropTypes.string.isRequired,
  imageChange: PropTypes.string.isRequired,

}
;

export default textSelector;
