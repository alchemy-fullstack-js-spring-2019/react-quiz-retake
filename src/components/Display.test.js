import React from 'react';
import { shallow } from 'enzyme';
import Display from './Display';

describe('app', () => {
  it('renders display', () => {
    const wrapper = shallow(<Display />);
    expect(wrapper).toMatchSnapshot();
  });
})
;
