import React from 'react';
import { shallow } from 'enzyme';
import Meme from './Meme';

describe('Meme component', () => {
  it('renders the Meme', () => {
    const wrapper = shallow(<Meme />);
    expect(wrapper).toMatchSnapshot();
  });
});
