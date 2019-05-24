import React from 'react';
import { shallow } from 'enzyme';
import Meme from './Meme';

describe('Display Component text', () => {
  it('renders the display', () => {
    const wrapper = shallow(<Meme />);
    expect(wrapper).toMatchSnapshot();
  });
});
