import React from "react";
import boy from "../assets/icons/boy.png";
const Profile = ({ user }) => {
    console.log(user);
    return (
        <>
            <div className="box">
                <div className="profile">
                    <img src={boy} />
                    <h3 className="user--name">{user.user_name}</h3>
                    <div className="button--area">
                        <button user-id={user.user_id} id="connect">
                            Connect
                        </button>
                        <button user-id={user.user_id} id="message">
                            Message
                        </button>
                        <button user-id={user.user_id} id="invite">
                            Invite
                        </button>
                    </div>
                    <div className="profile--info">
                        <h4>See About {user.user_name}</h4>
                        <li>Country : United States (USA)</li>
                        <li>Lives In : Washington DC</li>
                        <li>State : New York</li>
                        <li>Date Of Birth : 04 January 2003</li>
                        <li>Relationship : Single</li>
                        <li>Profession : Student </li>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Profile;
