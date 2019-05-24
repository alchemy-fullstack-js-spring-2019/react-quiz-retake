import React from 'react';
import { shallow } from 'enzyme'
import TextSelector from './TextSelector';

describe('TextSelector', () => {
  it('Renders text', () => {
  const wrapper = shallow(<TextSelector headerText="ugh" image="/img" footerText="yikes" handleChange={() => <h2>...</h2>} />);
    expect(wrapper).toMatchSnapshot();
  });
});
