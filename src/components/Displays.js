import React from 'react';
import PropTypes from 'prop-types';
import Display from './Display';

function Displays({ memes }) {
  const memeList = memes.map((meme, i) => {
    return (
      <li key={i}>
        <Display headerText={meme.headerText} footerText={meme.footerText} image={meme.image}/>
      </li>
    );
  });

  return (
    <ul>
      {memeList}
    </ul>
  );
}

Displays.propTypes = {
  memes: PropTypes.array.isRequired
};

export default Displays;
