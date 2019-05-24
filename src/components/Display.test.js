import React from 'react';
import { shallow } from 'enzyme';
import Display from './Display';

describe('Display component', () => {
  it('renders the display', () => {
    const wrapper = shallow(<Display headerText="hey" image="image.jpg" footerText="hey" />);
    expect(wrapper).toMatchSnapshot();
  });
});
