import React from 'react';
import { shallow } from 'enzyme';
import TextSelector from './TextSelector';

describe('TextSelector Component', () => {
  it('TextSelectors working', () => {
    const wrapper = shallow(<TextSelector />);
    expect(wrapper).toMatchSnapshot();
  });
});
