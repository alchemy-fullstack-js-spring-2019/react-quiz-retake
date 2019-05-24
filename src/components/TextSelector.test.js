import React from 'react';
import { shallow } from 'enzyme';
import TextSelector from './TextSelector';

describe('TextSelector component', () => {
  it('renders the app', () => {
    const handleChange = jest.fn();
    const wrapper = shallow(<TextSelector headerText='am i' footerText='doing this right' image='maybe.jpg' handleChange={handleChange} />);
    expect(wrapper).toMatchSnapshot();
  });
});
