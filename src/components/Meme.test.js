import React from 'react';
import { shallow } from 'enzyme';
import Meme from './Meme';

describe('Meme component', () => {
  it('renders the meme', () => {
    const wrapper = shallow(<Meme />);
    expect(wrapper).toMatchSnapshot();
  });
});
