import React from 'react';
import {NavLink} from "react-router-dom";

const Header = props => {
    return (
        <nav className="navbar navbar-dark bg-info">
            <NavLink to="/" className="navbar-brand">Forum</NavLink>

            {props.user
                ? <div>
                    <NavLink to="/track-history" className="navbar-brand">Add post</NavLink>
                </div>
                : <div>
                    <NavLink to="/register" className="navbar-brand">Register</NavLink>
                    <NavLink to="/login" className="navbar-brand">Login</NavLink>
                </div>
            }

        </nav>
    );
};

export default Header;
