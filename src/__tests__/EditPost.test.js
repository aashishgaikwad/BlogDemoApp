import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import EditPost from '../components/EditPost';

test('renders EditPost correctly', () => {
    const props = { match: { params: { id: 1 } }, location: { state: { userId: 1 } } };
    const wrapper = shallow(<EditPost {...props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
});

