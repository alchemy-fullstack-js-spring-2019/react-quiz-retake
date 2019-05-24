import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App Componenet', () => {
  it('renders the App', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot(); 
  });
});
