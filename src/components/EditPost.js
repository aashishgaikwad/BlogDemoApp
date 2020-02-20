import React from 'react';
import PostItemForm from './PostItemForm';

const EditPost = (props) => {
	const id = props.match.params.id;
	const userId = props.location.state.userId;
	const onSubmitHandler = ({ title, body }) => {
		fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
			method: 'PUT',
			body: JSON.stringify({
				id: id,
				title: title,
				body: body,
				userId: userId
			}),
			headers: {
				'Content-type': 'application/json; charset=UTF-8'
			}
		})
			.then((response) => response.json())
			.then((json) => {
				console.log(json);
				alert('Post edited successfully.');
				props.history.push('/');
			})
			.catch((error) => {
				console.error(error);
				//alert('Something went wrong. Please try after sometime.');
			});
	};
	return (
		<PostItemForm onSubmit={onSubmitHandler} title={props.location.state.title} body={props.location.state.body} />
	);
};

export default EditPost;
