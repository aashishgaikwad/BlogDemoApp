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
        <div>
            <h3>Enter Details</h3>
            <form onSubmit={submitHandler}>
                <label htmlFor="title">Title: </label>
                <br />
                <input type="text" name="title" id="title" className="textBox" onChange={(e) => setTitle(e.target.value)} value={title} />
                <br />
                <br />
                <label htmlFor="body">Body: </label>
                <br />
                <textarea name="body" id="body" className="textAreaBox" onChange={(e) => setBody(e.target.value)} value={body} />
                <br />
                <span className="error">{error}</span>
                <br />
                <br />
                <input type="submit" value="Submit" className="submit" />
            </form>
        </div>
    );
};

export default PostItemForm;
