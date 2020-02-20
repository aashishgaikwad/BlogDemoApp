import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ViewPost = ({ match: { params: { id } } }) => {
	const [ post, setPost ] = useState(null);

	useEffect(
		() => {
			console.log('inside hook...', id);
			fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
				.then((res) => res.json())
				.then((post) => {
					console.log(post);
					setPost(post);
				})
				.catch((error) => {
					console.error(error);
					//alert('Something went wrong. Please try after sometime.');
				});
		},
		[ id ]
	);
	return post ? (
		<div>
			<div className="center">
				<h3> {post.title} </h3>
				<p> {post.body} </p>
			</div>
			<div className="center">
				<Link
					to={{
						pathname: `/editPost/${id}`,
						state: {
							title: post.title,
							body: post.body,
							userId: post.userId
						}
					}}
				>
					Edit Post
				</Link>
			</div>
		</div>
	) : (
		<p className="center">Loading...</p>
	);
};

export default ViewPost;
