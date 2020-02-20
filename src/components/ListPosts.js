import React, { useState, useEffect } from 'react';
import Post from './Post';
const ListPosts = () => {
	const [ posts, setPosts ] = useState([]);
	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/posts')
			.then((res) => {
				if (res.ok) {
					return res.json();
				}
				throw new Error(res.status);
			})
			.then((responseData) => {
				console.log(responseData);
				setPosts(responseData);
			})
			.catch((error) => {
				console.error(error);
				//alert('Something went wrong. Please try after sometime.');
			});
	}, []);
    return posts.length ? posts.map((post) => <Post key={post.id} {...post} />) : <h3 className="center">Loading posts...</h3>
};

export default ListPosts;
