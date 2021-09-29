import React from "react";
import {Link} from "react-router-dom";
import user from '../../images/user-image-icon-17.jpg'
import './Header.scss'

const Header = () => {
    return (
        <div className={"header"}>
            <Link to={"/"}>Movie App</Link>
            <div className="logo">
                <div className="user-image">
                    <img src={user} alt="user"/>
                </div>
            </div>
        </div>
    );
};

export default Header;