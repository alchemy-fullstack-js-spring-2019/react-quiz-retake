import React from 'react';
import { shallow } from 'enzyme';
import TextSelector from './TextSelector';

describe('text selector snapshot', () => {
  it('renders textselector', () => {
    const text = 'hello';
    const bottomText = 'there';
    const image = '/image';
    const wrapper = shallow(<TextSelector text={text} bottomText={bottomText} image={image} handleChange={() => {}} />);
    expect(wrapper).toMatchSnapshot();
  });
});
