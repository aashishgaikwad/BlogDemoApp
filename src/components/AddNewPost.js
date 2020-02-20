import React from 'react';
import PostItemForm from './PostItemForm';

const AddNewPost = (props) => {
	const onSubmitHandler = ({ title, body }) => {
		fetch('https://jsonplaceholder.typicode.com/posts', {
			method: 'POST',
			body: JSON.stringify({
				title: title,
				body: body,
				userId: Math.floor(Math.random * 100)
			}),
			headers: {
				'Content-type': 'application/json; charset=UTF-8'
			}
		})
			.then((response) => response.json())
			.then((json) => {
                console.log(json);
                alert('Post added successfully.');
                props.history.push('/');
			})
			.catch((error) => {
                console.error(error);
                //alert('Something went wrong. Please try after sometime.');
			});
	};
	return <PostItemForm onSubmit={onSubmitHandler} />;
};

export default AddNewPost;
