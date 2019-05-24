import React from 'react';
import { shallow } from 'enzyme';
import TextSelector from './TextSelector';

describe('TextSelector component', () => {
  it('renders a TextSelector', () => {
    const state = {
      headerText: 'header',
      footerText: 'header',
      image: 'header'
    };

    const wrapper = shallow(<TextSelector state={state} handleChange={jest.fn()} />);
    expect(wrapper).toMatchSnapshot();
  });
});
