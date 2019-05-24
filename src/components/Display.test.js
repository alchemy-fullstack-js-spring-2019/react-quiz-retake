import React from 'react';
import { shallow } from 'enzyme';
import Display from './Display';

describe('display component', () => {
  it('renders the display', () => {
    const wrapper = shallow(<Display />);
    expect(wrapper).toMatchSnapshot();
  });
});
