import React from 'react';
import { shallow } from 'enzyme';
import TextSelector from './TextSelector';

describe('TextSelector', () => {
  it('TextSelector', () => {
    const wrapper = shallow(<TextSelector 
      headerText={'hi'} 
      footerText={'hello'} 
      image={'./image'} 
      handleChange={jest.fn()} 
    />);
    expect(wrapper).toMatchSnapshot();
  });
});
