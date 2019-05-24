import React from 'react';
import { shallow } from 'enzyme';
import HeaderSelector from './HeaderSelector';

describe('header component', () => {
  it('allows input of header text', () => {
    const wrapper = shallow(<HeaderSelector />);
    expect(wrapper).toMatchSnapshot();
  });
});
