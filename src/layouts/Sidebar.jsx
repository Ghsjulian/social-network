import React, { useRef, useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

import home1 from "../assets/icons/home1.png";
import menu from "../assets/icons/menu.png";
import man from "../assets/icons/man.png";
import analytics from "../assets/icons/analytics.png";
import boy from "../assets/icons/boy.png";
import notes from "../assets/icons/notes.png";
import letter from "../assets/icons/letter.png";
import goal from "../assets/icons/goal.png";
import information from "../assets/icons/information.png";
import call from "../assets/icons/call.png";
import settings1 from "../assets/icons/settings1.png";
import login from "../assets/icons/login.png";

const Sidebar = ({user_id}) => {
    const location = useLocation();
    const [path, setpath] = useState("");
    useEffect(() => {
        setpath(location.pathname);
    }, [location]);
    return (
        <>
            <aside className="sidebar">
                <h2>
                    <img src={menu} /> Select Menu
                </h2>
                <li className={path === "/" ? "active" : ""}>
                    <NavLink to="/">
                        <img src={analytics} alt="home" />
                        News Feed
                    </NavLink>
                </li>
                <li className={path === "/profile" ? "active" : ""}>
                    <NavLink to={`/profile/user/${user_id}`}>
                        <img src={boy} alt="home" />
                        Profile
                    </NavLink>
                </li>
                <li className={path === "/find-people" ? "active" : ""}>
                    <NavLink to="/find-people">
                        <img src={man} alt="home" />
                        Find People
                    </NavLink>
                </li>
                <li className={path === "/write-post" ? "active" : ""}>
                    <NavLink to="/write-post">
                        <img src={letter} alt="home" /> Write Post
                    </NavLink>
                </li>
                <li className={path === "/report-us" ? "active" : ""}>
                    <NavLink to="/report-us">
                        <img src={goal} alt="home" />
                        Report Us
                    </NavLink>
                </li>
                <li className={path === "/about-us" ? "active" : ""}>
                    <NavLink to="/about-us">
                        <img src={information} alt="home" />
                        About Us
                    </NavLink>
                </li>
                <li className={path === "/contact-us" ? "active" : ""}>
                    <NavLink to="/contact-us">
                        <img src={call} alt="home" />
                        Contact
                    </NavLink>
                </li>
                <li className={path === "/settings" ? "active" : ""}>
                    <NavLink to="/settings">
                        <img src={settings1} alt="home" />
                        Settings
                    </NavLink>
                </li>
                <li className={path === "/logout" ? "active" : ""}>
                    <NavLink to="/logout">
                        <img src={login} alt="home" />
                        Logout
                    </NavLink>
                </li>
            </aside>
        </>
    );
};

export default Sidebar;
