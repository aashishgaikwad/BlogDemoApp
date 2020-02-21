import React from 'react';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import PostItemForm from '../components/PostItemForm';

test('renders PostItemForm correctly', () => {
    const wrapper = shallow(<PostItemForm />);
    expect(toJson(wrapper)).toMatchSnapshot();
});

test('renders PostItemForm correctly with post data', () => {
    const wrapper = shallow(<PostItemForm title={'post title'} body={'post body'} />);
    expect(toJson(wrapper)).toMatchSnapshot();
});

test('call onSubmit prop for valid form submission', () => {
    const onSubmitSpy = jest.fn();
    const wrapper = shallow(<PostItemForm title={'post title'} body={'post body'} onSubmit={onSubmitSpy} />);
    wrapper.find('form').simulate('submit', {
        preventDefault: () => {}
    });
    expect(onSubmitSpy).toHaveBeenLastCalledWith({
        title: 'post title',
        body: 'post body'
    });
});

test('renders error for invalid form submission', () => {
    const wrapper = mount(<PostItemForm />);
    expect(toJson(wrapper)).toMatchSnapshot();
    wrapper.find('form').simulate('submit', {
        preventDefault: () => {}
    });
    expect(wrapper.find('span').text()).toEqual('Please provide title and body.');
});
