import React from 'react';
import TextSelector from './TextSelector.js';
import { shallow } from 'enzyme';

describe('Text Selector tests', () => {
  it('renders the text selector', () => {
    const func = jest.fn();
    const wrapper = shallow(<TextSelector imageUrl="www.test.com" topText="heck" bottomText="yes" handleChange={func} />);
    expect(wrapper).toMatchSnapshot();
  });
}); 
