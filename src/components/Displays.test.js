import React from 'react';
import { shallow } from 'enzyme';
import Displays from './Displays';

describe('Displays Component', () => {
  it('displays stuffssssssss', () => {
    const memes = [{ headerText: 'text', footerText: 'text', image: 'text' }];
    const wrapper = shallow(<Displays  memes={memes}/>);
    expect(wrapper).toMatchSnapshot();
  });
});
