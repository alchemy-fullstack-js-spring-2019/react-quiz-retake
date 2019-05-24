import React from 'react';
import { shallow } from 'enzyme';
import TextSelector from './TextSelector';

describe('Text Input Component', () => {
  it('renders text selector', () => {
    const wrapper = shallow(<TextSelector changeHandler={jest.fn()} header={'text'} footer={'text'} image={'text'}/>);
    expect(wrapper).toMatchSnapshot();
  });
});
