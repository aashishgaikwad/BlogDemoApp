import React, { useState, useEffect } from 'react';
import Post from './Post';
import ShowMessage from './ShowMessage';

const ListPosts = () => {
    const [ posts, setPosts ] = useState([]);
    const [ messageType, setMessageType ] = useState('');

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((res) => {
                if (res.ok) {
                    return res.json();
                }
                throw new Error(res.status);
            })
            .then((responseData) => {
                setPosts(responseData);
            })
            .catch((error) => {
                setMessageType('error');
            });
    }, []);
    return messageType === '' ? posts.length ? (
        posts.map((post) => <Post key={post.id} {...post} />)
    ) : (
        <h3 className="center">Loading posts...</h3>
    ) : (
        <div className="center">
            <ShowMessage messageType={messageType} />
        </div>
    );
};

export default ListPosts;
