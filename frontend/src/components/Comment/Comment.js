import React from 'react';

const Comment = props => {
    return (
        <div className="comment">
            <span className="text-muted">{props.user}: </span>
            <span>{props.text}</span>
        </div>
    );
};

export default Comment;
