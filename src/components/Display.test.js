import React from 'react';
import { shallow } from 'enzyme';
import Display from './Display';

describe('text selector snapshot', () => {
  it('renders textselector', () => {
    const text = 'hello';
    const bottomText = 'there';
    const image = '/image';
    const wrapper = shallow(<Display text={text} bottomText={bottomText} image={image} />);
    expect(wrapper).toMatchSnapshot();
  });
});
