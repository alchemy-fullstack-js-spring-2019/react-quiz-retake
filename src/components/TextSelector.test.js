import React from 'react';
import { shallow } from 'enzyme';
import TextSelector from './TextSelector';

describe('TextSelector component', () => {
  it('displays the textselector', () => {
    const handleHeaderChange = () => {return 'hi';};
    const handleFooterChange = () => {return 'hi';};
    const handleImageSrcChange = () => {return 'hi';};
    const wrapper = shallow(<TextSelector handleHeaderChange={handleHeaderChange} handleFooterChange={handleFooterChange} handleImageSrcChange={handleImageSrcChange} />);
    expect(wrapper).toMatchSnapshot(); 
  });
});
