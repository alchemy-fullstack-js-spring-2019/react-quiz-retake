import React from 'react';
import { shallow } from 'enzyme';
import Display from './Display';

describe('Display component', () => {
  it('displays the meme', () => {
    const headerText = {
      headerText: 'hello',
      footerText: 'good friend',
      imageSrc: 'blah'
    };
    const wrapper = shallow(<Display headerText={headerText.headerText} footerText={headerText.footerText} imageSrc={headerText.imageSrc} />);
    expect(wrapper).toMatchSnapshot(); 
  });
});
