import React, { useState } from 'react';
import PostItemForm from './PostItemForm';
import ShowMessage from './ShowMessage';

const AddNewPost = () => {
    const [ messageType, setMessageType ] = useState('');
    const [loader, setLoader ] = useState(false);
    const onSubmitHandler = ({ title, body }) => {
        setMessageType('');
        setLoader(true);
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
            .then((post) => {
                setMessageType('success');
                setLoader(false);
            })
            .catch((error) => {
                setMessageType('error');
                setLoader(false);
            });
    };
    return (
        <div>
            <div className="divStyle">
                <PostItemForm onSubmit={onSubmitHandler} />
                <ShowMessage messageType={messageType} />
            </div>
            { loader && <div className="loader" /> }
        </div>
    );
};

export default AddNewPost;
