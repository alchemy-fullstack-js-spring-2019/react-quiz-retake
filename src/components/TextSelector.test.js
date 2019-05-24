import React from 'react';
import { shallow } from 'enzyme';
import TextSelector from './Display';

describe('text input component', () => {
  it('renders a text input', () => {
    const wrapper = shallow(<TextSelector headerText="hi" imgSource="blue" footerText="test" />);
    expect(wrapper).toMatchSnapshot();
  });
});
