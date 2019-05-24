import React from 'react';
import { shallow } from 'enzyme';
import Display from './Display';

describe('Display Component', () => {
  it('Displays footer, image, and header elements', () => {
    const wrapper = shallow(<Display />);
    expect(wrapper).toMatchSnapshot();
  });
});
