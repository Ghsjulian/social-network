import React from "react";
import heart_outline from "../assets/icons/heart_outline.png";
import plane from "../assets/icons/plane.png";
import comment_1 from "../assets/icons/comment_1.png";
import share from "../assets/icons/share.png";
import boy from "../assets/icons/boy.png";

const Post = () => {
    return (
        <>
            <div className="post--area">
                <div className="post--">
                    <div className="user--">
                        <img src={boy} />
                        <span>Ghs Julian</span>
                    </div>
                    <div className="post-content">
                        This Is A Simple Example Post , Written For Testing That
                        How Is Looking This UI. And this text is showing
                        statically not dynamicly from the server or API
                    </div>
                    <div className="button--area">
                        <button id="connect">
                            <img src={heart_outline} />
                        </button>
                        <button id="message">
                            <img src={comment_1} />
                        </button>
                        <button id="invite">
                            <img src={share} />
                        </button>
                    </div>
                    <div className="comment--area">
                        <input
                            type="text"
                            id="comment"
                            placeholder="Write A Comment..."
                        />
                        <button id="comment--btn">
                            <img src={plane} />
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Post;
