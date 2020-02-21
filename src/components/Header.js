import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header style={headerStyle}>
            <h1>React Blog</h1>
            <Link style={linkStyle} to="/">
				Home
            </Link>
            {' '}
			|
            <Link style={linkStyle} to="/addPost">
                {' '}
				Add Post
            </Link>
        </header>
    );
};
const headerStyle = {
    background: '#333',
    padding: '10px',
    color: '#fff',
    textAlign: 'center'
};

const linkStyle = {
    color: '#fff',
    textDecoration: 'none'
};

export default Header;
