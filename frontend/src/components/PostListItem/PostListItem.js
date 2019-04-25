import React from 'react';
import {apiURL} from "../../constants";
import {NavLink} from "react-router-dom";

const PostListItem = props => {
    return (
        <div className="post">
            <NavLink to={`posts/${props.id}`} className="post-img">
                {props.image
                    ? <img src={`${apiURL}/uploads/${props.image}`} alt={props.title}/>
                    : null
                }
            </NavLink>
            <div className="post-text">
                <h4 className="mb-2"><NavLink to={`posts/${props.id}`}>{props.title}</NavLink></h4>
                <div><span className="text-muted">published at:</span> {props.published_at}</div>
                <div><span className="text-muted">author:</span> {props.user.fullName}</div>
            </div>
        </div>
    );
};

export default PostListItem;
