import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import ShowMessage from '../components/ShowMessage';

test('renders ShowMessage correctly', () => {
    const wrapper = shallow(<ShowMessage />);
    expect(toJson(wrapper)).toMatchSnapshot();
});

test('renders ShowMessage correctly for success', () => {
    const wrapper = shallow(<ShowMessage messageType={'success'}/>);
    expect(toJson(wrapper)).toMatchSnapshot();
});

test('renders ShowMessage correctly for error', () => {
    const wrapper = shallow(<ShowMessage messageType={'error'}/>);
    expect(toJson(wrapper)).toMatchSnapshot();
});
