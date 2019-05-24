import React from 'react';
import { shallow } from 'enzyme';
import TextSelector from './TextSelector';

describe('Display Component text', () => {
  it('renders the display', () => {
    const wrapper = shallow(<TextSelector />);
    expect(wrapper).toMatchSnapshot();
  });
});
