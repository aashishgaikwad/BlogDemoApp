import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Post from '../components/Post';

test('renders Post correctly', () => {
    const post = {
        id: 1,
        title: 'post title',
        body: 'post body',
        userId: 1
    };
    const wrapper = shallow(<Post key={1} {...post} />);
    expect(toJson(wrapper)).toMatchSnapshot();
});
