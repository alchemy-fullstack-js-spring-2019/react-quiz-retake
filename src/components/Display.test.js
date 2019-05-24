import React from 'react';
import { shallow } from 'enzyme';
import Display from './Display';

describe('Display Component text', () => {
  it('renders the display', () => {
    const wrapper = shallow(<Display />);
    expect(wrapper).toMatchSnapshot();
  });
});
