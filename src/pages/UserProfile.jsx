import React, { useState, useEffect, useContext } from "react";
import { NavLink, useParams } from "react-router-dom";
//import ghs from "../assets/images/ghs.png";
import Profile from "../components/Profile";
import writePost from "../components/writePost";
import Post from "../components/Post";

import boy from "../assets/icons/boy.png";
import gallary from "../assets/icons/gallary.png";
import heart_outline from "../assets/icons/heart_outline.png";
import plane from "../assets/icons/plane.png";
import comment_1 from "../assets/icons/comment_1.png";
import share from "../assets/icons/share.png";
//import "../assets/css/main--row.css"
import { useAuth } from "../context/useAuth";
import __api__ from "../assets/js/Requester.js";

const UserProfile = () => {
    const { session, userId, getCookie, getUserById } = useAuth();
    const param = useParams();
    const [user, setUser] = useState("");
    const [sessionId, setSessionId] = useState(false);
    useEffect(() => {
        if (param.id == userId) {
            setSessionId(true);
            document.title =
                session[0].user_name + " - Profile | View User Profile";
        } else {
            let user = [];
            let url = "http://localhost:8080/get-user";
            __api__.postData(url, { user_id: param.id }, res => {
                setUser(res);
                document.title =
                    res.user_name + " - Profile | View User Profile";
            });
        }
    }, [session, param]);

    // console.log(user[0]);
    // console.log(session[0]);
    return (
        <>
            <div className="grid-element fixed--profile">
                {<Profile user={sessionId ? [session[0], {sessionId}] : user} />}
            </div>
            <div id="news--feed" className="grid-element scroll--feed">
                <div className="write--post">
                    <h3 id="post--head">Write A Post</h3>
                    <img src={gallary} />
                    <input type="file" id="post--photo" hidden={true} />
                    <textarea
                        id="post"
                        placeholder="Write Your Post Here..."
                    ></textarea>
                    <div className="post--btn">
                        <label htmlFor="post--photo">Select Photo</label>
                        <button id="post--btn">Post Now</button>
                    </div>
                </div>
                {<Post />}
                {<Post />}
                {<Post />}
            </div>
        </>
    );
};

export default UserProfile;
