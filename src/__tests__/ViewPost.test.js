import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import ViewPost from '../components/ViewPost';

test('renders ViewPost correctly', () => {
    const props = { match: { params: { id: 1 } } };
    const wrapper = shallow(<ViewPost {...props}/>);
    expect(toJson(wrapper)).toMatchSnapshot();
});
