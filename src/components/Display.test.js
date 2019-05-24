import React from 'react';
import { shallow } from 'enzyme';
import Display from './Display';

describe('Display Component', () => {
  it('displays stuff!', () => {
    const wrapper = shallow(<Display changeHandler={jest.fn()} headerText={'text'} footerText={'text'} image={'text'}/>);
    expect(wrapper).toMatchSnapshot();
  });
});
