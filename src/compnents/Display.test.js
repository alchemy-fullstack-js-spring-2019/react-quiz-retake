import React from 'react';
import { shallow } from 'enzyme';
import Display from './Display';

describe('Display component', () => {
  it('renders a Display', () => {
    const meme = {
      headerText: 'meme baby meme',
      footerText: 'aint it neat',
      image: 'asdfg.com.png'
    };

    const wrapper = shallow(<Display meme={meme} />);
    expect(wrapper).toMatchSnapshot();
  });
});
