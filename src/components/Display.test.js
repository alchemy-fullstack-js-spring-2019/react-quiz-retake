import React from 'react';
import { shallow } from 'enzyme';
import Display from './Display';

describe('Display component', () => {
  it('renders a Display', () => {
    const wrapper = shallow(<Display headerText="hello" footerText="goodbye" image="/img" />);
    expect(wrapper).toMatchSnapshot();
  });
});
