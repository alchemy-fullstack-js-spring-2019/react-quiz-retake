import React from 'react';
import { shallow } from 'enzyme';
import Display from './Display';

describe('App component', () => {
  it('renders the app', () => {
    const wrapper = shallow(<Display headerText='what' footerText='am i doing' image='meme.jpg' />);
    expect(wrapper).toMatchSnapshot();
  });
});
