import React from 'react';
import { shallow } from 'enzyme';
import Display from './Display';

describe('Display', () => {
  it('Display', () => {
    const wrapper = shallow(<Display 
      headerText={'hi'} 
      footerText={'hello'} 
      image={'./image'} 
    />);
    expect(wrapper).toMatchSnapshot();
  });
});
