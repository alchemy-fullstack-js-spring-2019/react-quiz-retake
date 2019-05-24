import React from 'react';
import { shallow } from 'enzyme';
import Display from './Display';

describe('meme display component', () => {
  it('renders a meme display', () => {
    const wrapper = shallow(<Display headerText="hi" imgSource="blue" footerText="test" />);
    expect(wrapper).toMatchSnapshot();
  });
});
