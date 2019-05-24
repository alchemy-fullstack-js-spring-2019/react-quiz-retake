import React from 'react';
import { shallow } from 'enzyme';
import TextSelector from './TextSelector';

describe('TextSelector component', () => {
  it('renders a TextSelector', () => {
    const text = 'this is text i promise';

    const wrapper = shallow(<TextSelector text={text} />);
    expect(wrapper).toMatchSnapshot();
  });
});
