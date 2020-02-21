import React, { useState } from 'react';
import PostItemForm from './PostItemForm';
import ShowMessage from './ShowMessage';

const EditPost = (props) => {
    const id = props.match.params.id;
    const userId = props.location.state.userId;
    const [ messageType, setMessageType ] = useState('');
    const [ loader, setLoader ] = useState(false);

    const onSubmitHandler = ({ title, body }) => {
        setMessageType('');
        setLoader(true);
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
                <PostItemForm
                    onSubmit={onSubmitHandler}
                    title={props.location.state.title}
                    body={props.location.state.body}
                />
                <ShowMessage messageType={messageType} />
            </div>
            {loader && <div className="loader" />}
        </div>
    );
};

export default EditPost;
