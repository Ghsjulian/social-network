import React from "react";
import gallary from "../assets/icons/gallary.png";
const writePost = () => {
    return (
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
    );
};

export default writePost;
