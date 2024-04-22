import React, { useState, useRef } from "react";
import user from "../assets/icons/user.png";
import option from "../assets/icons/option.png";
import plus from "../assets/icons/plus.png";
import plane from "../assets/icons/plane.png";
import "../assets/css/messanger.css";
const Chatbox = () => {
    const sideRef = useRef(null);
    const chatRef = useRef(null);
    const [msg, setMsg] = useState("");
    const openSide = () => {
        let isOpen = sideRef.current.getAttribute("open");
        if (isOpen === "0") {
            sideRef.current.style.display = "block";
            sideRef.current.setAttribute("open", "1");
        } else {
            sideRef.current.style.display = "none";
            sideRef.current.setAttribute("open", "0");
        }
    };
    const outgoing = msg => {
        const main = document.createElement("div");
        const plate = document.createElement("div");
        const message = document.createElement("div");
        const time = document.createElement("small");
        const userImg = document.createElement("img");
        userImg.src = user;
        main.classList.add("outgoing");
        plate.classList.add("plate");
        message.setAttribute("id", "message");
        message.textContent = msg;
        time.setAttribute("id", "time");
        main.appendChild(userImg);
        plate.appendChild(message);
        plate.appendChild(time);
        main.appendChild(plate);
        chatRef.current.appendChild(main);
    };
    const incoming = msg => {
        const main = document.createElement("div");
        const plate = document.createElement("div");
        const message = document.createElement("div");
        const time = document.createElement("small");
        const userImg = document.createElement("img");
        userImg.src = user;
        main.classList.add("incoming");
        plate.classList.add("plate");
        message.setAttribute("id", "message");
        message.textContent = msg;
        time.setAttribute("id", "time");
        plate.appendChild(message);
        plate.appendChild(time);
        main.appendChild(plate);
        main.appendChild(userImg);
        chatRef.current.appendChild(main);
    };
    const sendText = e => {
        e.preventDefault();
        if (msg.trim()) {
            //console.log(previewChat(msg));
             incoming(msg);
            outgoing(msg);
            setMsg("");
        }
    };
    return (
        <>
            <div className="nav--bar">
                <span>Connected Peoples</span>
                <a href="#">
                    <img src={user} alt="home" />
                </a>
                <span>Your Chat Room</span>
                <a onClick={openSide} id="nav-btn" href="#">
                    <img src={option} alt="home" />
                </a>
                <span>Profile</span>
            </div>
            <div className="main">
                <div ref={sideRef} open="0" id="connect" className="row">
                    Row 1
                </div>
                <div id="chat-box" className="row">
                    <div ref={chatRef} className="box">
                        {/*
                        <div className="outgoing">
                            <img src={user} />
                            <div className="plate">
                                <div id="message">
                                    This is test message from sender , and when
                                    you're trying
                                </div>
                                <small id="time">12:34 PM</small>
                            </div>
                        </div>
                        <div className="incoming">
                            <div className="plate">
                                <div id="message">
                                    This is test message from sender , and when
                                    you're trying
                                </div>
                                <small id="time">12:34 PM</small>
                            </div>
                            <img src={user} />
                        </div>
                        <div className="outgoing">
                            <img src={user} />
                            <div className="plate">
                                <div id="message">
                                    This is test message from sender , and when
                                    you're trying
                                </div>
                                <small id="time">12:34 PM</small>
                            </div>
                        </div>
                        <div className="incoming">
                            <div className="plate">
                                <div id="message">
                                    This is test message from sender , and when
                                    you're trying
                                </div>
                                <small id="time">12:34 PM</small>
                            </div>
                            <img src={user} />
                        </div>
                        <div className="outgoing">
                            <img src={user} />
                            <div className="plate">
                                <div id="message">
                                    This is test message from sender , and when
                                    you're trying
                                </div>
                                <small id="time">12:34 PM</small>
                            </div>
                        </div>
                        <div className="incoming">
                            <div className="plate">
                                <div id="message">
                                    This is test message from sender , and when
                                    you're trying
                                </div>
                                <small id="time">12:34 PM</small>
                            </div>
                            <img src={user} />
                        </div>
                        <div className="outgoing">
                            <img src={user} />
                            <div className="plate">
                                <div id="message">
                                    This is test message from sender , and when
                                    you're trying
                                </div>
                                <small id="time">12:34 PM</small>
                            </div>
                        </div>
                        <div className="incoming">
                            <div className="plate">
                                <div id="message">
                                    This is test message from sender , and when
                                    you're trying
                                </div>
                                <small id="time">12:34 PM</small>
                            </div>
                            <img src={user} />
                        </div>

                        <div className="outgoing">
                            <img src={user} />
                            <div className="plate">
                                <div id="message">
                                    Hi Julie what are you doing
                                </div>
                                <small id="time">12:34 PM</small>
                            </div>
                        </div>
                        <div className="incoming">
                            <div className="plate">
                                <div id="message">
                                    Hello dear I'm making chatting application
                                </div>
                                <small id="time">12:34 PM</small>
                            </div>
                            <img src={user} />
                        </div>
                        <div className="outgoing">
                            <img src={user} />
                            <div className="plate">
                                <div id="message">Wow 😮 it's amazing 🤩</div>
                                <small id="time">12:34 PM</small>
                            </div>
                        </div>
                        */}
                    </div>

                    <div className="type-area">
                        <span>
                            <img src={plus} alt="Add Photos" />
                        </span>
                        <textarea
                            onChange={e => {
                                setMsg(e.target.value);
                            }}
                            id="text"
                            value={msg}
                            placeholder="Type A Message..."
                        ></textarea>
                        <button onClick={sendText} id="send">
                            <img src={plane} alt="Send Messages" />
                        </button>
                    </div>
                </div>
                <div id="profile" className="row">
                    Row 3
                </div>
            </div>
        </>
    );
};

export default Chatbox;
