import React from 'react';
import { shallow } from 'enzyme';
import Meme from './Meme';

describe('Meme', () => {
  it('Renders Meme', () => {
    const wrapper = shallow(<Meme />);
    expect(wrapper).toMatchSnapshot();
  });
});
