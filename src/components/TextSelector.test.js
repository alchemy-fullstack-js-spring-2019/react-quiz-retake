import React from 'react';
import { shallow } from 'enzyme';
import TextSelector from './TextSelector';

describe('TextSelector component', () => {
  it('renders textselector bits', () => {
    const wrapper = shallow(<TextSelector text="yup" handleChange={jest.fn()} name="yup" />);
    expect(wrapper).toMatchSnapshot();
  });
});
