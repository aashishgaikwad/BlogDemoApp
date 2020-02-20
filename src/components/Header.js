import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<div>
			<div>
				<h1 className="center">React Blog</h1>
			</div>
			<div style={{ marginLeft: '2rem' }}>
				<Link to={'/addPost'}>Add New Post</Link>
			</div>
		</div>
	);
};

export default Header;
