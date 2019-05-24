import React from 'react';
import PropTypes from 'prop-types';

export default function Display({ headerText, image, footerText }) {
  const styles = {
    width: '300px',
    height: '300px',
    margin: '20px',
    headerText,
    image,
    footerText,
  };

  return (
    <section style={styles}>
      <p >{headerText}</p>
      <div>
        <img src="http://preetkamal.com/wp-content/uploads/2019/03/Friday-Meme-Friday-Is-My-Second.jpg" alt="friday meme"></img>
      </div>
      <p>{footerText}</p>
    </section>
  );
}

Display.propTypes = {
  headerText: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  footerText: PropTypes.string.isRequired
};

