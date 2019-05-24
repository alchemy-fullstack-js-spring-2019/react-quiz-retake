import React from 'react';
import { shallow } from 'enzyme';
import TextSelector from './TextSelector';

describe('Text selector Component', () => {
  it('renders the text selector', () => {
    const wrapper = shallow(<TextSelector headerText="cool" footerText="meme" image="meme.jpg" />);
    expect(wrapper).toMatchSnapshot();
  });
});
