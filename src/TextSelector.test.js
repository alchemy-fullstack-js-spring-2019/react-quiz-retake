import React from 'react';
import { shallow } from 'enzyme';
import TextSelector from './TextSelector';

describe('text selector component', () => {
  it('handles text input', () => {
    const wrapper = shallow(<TextSelector />);
    expect(wrapper).toMatchSnapshot();
  });
});
