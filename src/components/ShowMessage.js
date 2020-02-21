import React from 'react';

const ShowMessage = ({ messageType }) => {
    const errorMessage = 'Service is unavailable. Please try after sometime.';
    const successMessage = 'Request completed successfully.';
    return (
        <div>
            {messageType === 'success' && <p className="success"> {successMessage} </p>}
            {messageType === 'error' && <p className="error"> {errorMessage} </p>}
        </div>
    );
};

export default ShowMessage;
