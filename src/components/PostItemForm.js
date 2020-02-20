import React, { useState } from 'react';

const PostItemForm = (props) => {
	const [ title, setTitle ] = useState(props.title ? props.title : '');
	const [ body, setBody ] = useState(props.body ? props.body : '');
	const [ error, setError ] = useState('');
	const submitHandler = (e) => {
		e.preventDefault();
		if (!title || !body) {
			setError('Please provide title and body.');
		} else {
			setError('');
			props.onSubmit({
				title,
				body
			});
		}
	};
	return (
		<div style={{ marginLeft: '5rem' }}>
			<h3>Enter Details</h3>
			<form onSubmit={submitHandler}>
				<label>Title: </label>
				<br />
				<input type="text" name="title" autoFocus onChange={(e) => setTitle(e.target.value)} value={title} />
				<br />
				<br />
				<label>Body: </label>
				<br />
				<textarea name="body" onChange={(e) => setBody(e.target.value)} value={body} />
				<br />
				{error}
				<br />
				<br />
				<input type="submit" value="Submit" />
			</form>
		</div>
	);
};

export default PostItemForm;
