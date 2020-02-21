import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import ListPosts from '../components/ListPosts';

test('renders ListPosts correctly', () => {
    const wrapper = shallow(<ListPosts />);
    expect(toJson(wrapper)).toMatchSnapshot();
});