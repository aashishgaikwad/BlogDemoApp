import React from 'react';
import { Link } from 'react-router-dom';

const Post = ({ id, title, body }) => {
	return (
		<div key={id} className="center">
			<Link to={`/post/${id}`}>
				<h3>{title}</h3>
			</Link>
			<p>{body}</p>
		</div>
	);
};

export default Post;
