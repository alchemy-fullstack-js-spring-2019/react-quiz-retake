import React from 'react';
import Header from './header/header';
import Footer from './footer/footer';
import Meme from './Meme';
import oprah from '../assets/oprahComponent.jpeg';
import reactMeme from '../assets/reactMeme.jpeg';

export default function App() {
  const memes = [
    oprah,
    reactMeme
  ];

  return (
    <>
      <Header />
      <img title="Memes" memes={memes} />
      <Footer />
    </>
  );
}
