import React, { useRef, useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

/*<----ICONS---->*/
import home1 from "../assets/icons/home1.png";
import user from "../assets/icons/user.png";
import messenger from "../assets/icons/messenger.png";
import notification from "../assets/icons/notification.png";
import option from "../assets/icons/option.png";

const Navbar = ({user_id}) => {
    const Menu = () => {
        document.querySelector(".sidebar").classList.toggle("open");
        document.querySelector(".main-content").classList.toggle("expand");
    };
    // let cookie = getCookie("user_token");
    // let user = getUserById({ user_token: cookie });
    // console.log(session);
    return (
        <>
            <nav className="navbar">
                <NavLink to="/profile/user/25">
                    <img src={home1} alt="home" />
                </NavLink>
                <NavLink to={`/profile/user/${user_id}`}>
                    <img src={user} alt="profile" />
                </NavLink>
                <NavLink to="/messenger">
                    <img src={messenger} alt="home" />
                </NavLink>
                <NavLink to="/notification">
                    <img src={notification} alt="home" />
                </NavLink>
                <span id="menu">
                    <img onClick={Menu} src={option} alt="home" />
                </span>
            </nav>
        </>
    );
};

export default Navbar;
