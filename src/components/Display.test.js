import React from 'react';
import { shallow } from 'enzyme';
import Display from './Display';

describe('Display', () => {
  it('Renders display', () => {
  const wrapper = shallow(<Display headerText="ugh" image="/img" footerText="no" />);
    expect(wrapper).toMatchSnapshot();
  });
});
