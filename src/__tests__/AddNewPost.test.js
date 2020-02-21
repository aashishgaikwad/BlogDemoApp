import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import AddNewPost from '../components/AddNewPost';

test('renders AddNewPost correctly', () => {
    const wrapper = shallow(<AddNewPost />);
    expect(toJson(wrapper)).toMatchSnapshot();
});

