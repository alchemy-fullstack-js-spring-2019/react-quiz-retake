import React from 'react';
import { shallow } from 'enzyme'
import TextSelector from './TextSelector';

describe('TextSelector', () => {
  it('Renders text', () => {
    const wrapper = shallow(<TextSelector />);
    expect(wrapper).toMatchSnapshot();
  });
});
