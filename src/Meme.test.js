import React from 'react';
import { shallow } from 'enzyme';
import Meme from './Meme';

describe('meme component', () => {
  it('renders a meme', () => {
    const wrapper = shallow(<Meme />);
    expect(wrapper).toMatchSnapshot();
  });
});
