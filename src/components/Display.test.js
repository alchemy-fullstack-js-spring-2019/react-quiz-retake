import React from 'react';
import Display from './Display.js';
import { shallow } from 'enzyme';

describe('display tests', () => {
  it('renders the display', () => {
    const wrapper = shallow(<Display imageUrl="www.test.com" topText="heck" bottomText="yes" />);
    expect(wrapper).toMatchSnapshot();
  });
}); 
