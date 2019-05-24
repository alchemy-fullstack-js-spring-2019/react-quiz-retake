import React from 'react';
import { shallow } from 'enzyme';
import Display from './Display';

describe('Display Component', () => {
  it('renders the display', () => {
    const wrapper = shallow(<Display headerText="cool" footerText="meme" image="meme.jpg" />);
    expect(wrapper).toMatchSnapshot();
  });
});
