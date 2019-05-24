import React from 'react';
import { shallow } from 'enzyme';
import Meme from './Meme';

describe('Meme Component', () => {
  it('Memes show me the meme', () => {
    const wrapper = shallow(<Meme />);
    expect(wrapper).toMatchSnapshot();
  });
});
