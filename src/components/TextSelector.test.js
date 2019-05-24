import React from 'react';
import TextSelector from './TextSelector.js';
import { shallow } from 'enzyme';

describe('Text Selector tests', () => {
  it('renders the text selector', () => {
    const wrapper = shallow(<TextSelector />);
    expect(wrapper).toMatchSnapshot();
  });
}); 
