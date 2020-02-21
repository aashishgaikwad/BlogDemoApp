import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ShowMessage from './ShowMessage';

const ViewPost = ({ match: { params: { id } } }) => {
    const [ post, setPost ] = useState(null);
    const [ messageType, setMessageType ] = useState('');

    useEffect(
        () => {
            fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
                .then((res) => res.json())
                .then((post) => {
                    setPost(post);
                })
                .catch((error) => {
                    setMessageType('error');
                });
        },
        [ id ]
    );
    return messageType === '' ? post ? (
        <div className="post">
            <div>
                <span style={idStyle}> Id : {post.id}</span>
                <h3> {post.title} </h3>
                <p> {post.body} </p>
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
                <span style={idStyle}> By User : {post.userId}</span>
            </div>
        </div>
    ) : (
        <p className="center">Loading...</p>
    ) : (
        <div className="center">
            <ShowMessage messageType={messageType} />
        </div>
    );
};
const idStyle = { float: 'right', fontSize: '0.8rem', fontWeight: 'bold' };

export default ViewPost;
