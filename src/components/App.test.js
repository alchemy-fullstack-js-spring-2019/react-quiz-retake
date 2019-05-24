import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('meme display component', () => {
  it('renders a meme display', () => {
    const wrapper = shallow(<App headerText="hi" imgSource="blue" footerText="test" />);
    expect(wrapper).toMatchSnapshot();
  });
});