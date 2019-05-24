import React from 'react';
import propTypes from 'prop-types';

function Meme() {
  return (
    <section>
      <memes></memes>
    </section>
  );
}

Meme.propTypes = {
  memes: propTypes.array.isRequired
};

export default Meme;
