import React, { useState, useRef,useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "../assets/css/login.css";
import { checkEmail, checkName } from "../assets/js/check.js";
import gallary from "../assets/icons/gallary.png";
import __api__ from "../assets/js/Requester.js";
import { useAuth } from "../context/useAuth";

const Signup = () => {
    const [file, setFile] = useState(null);
    const [base64Image, setBase64Image] = useState("");
    const [name, setName] = useState("");
    const [email, setEmal] = useState("");
    const [password, setPassword] = useState("");
    const success = useRef(null);
    const error = useRef(null);
    const navigate = useNavigate();
    const { userId, dispatch, setCookie } = useAuth();
    useEffect(() => {
        if (userId) {
            navigate("/");
        }
    }, [isLoggedIn]);
    const previewImg = e => {
        e.preventDefault();
        const image = e.target.files[0];
        setFile(image);
        const reader = new FileReader();
        reader.readAsDataURL(image);
        reader.onload = () => {
            setBase64Image(reader.result);
        };
    };
    const showMessage = message => {
        if (message.type === "error") {
            success.current.style.display = "none";
            success.current.textContent = "";
            error.current.style.display = "block";
            error.current.textContent = message.text;
        } else {
            error.current.style.display = "none";
            error.current.textContent = "";
            success.current.style.display = "block";
            success.current.textContent = message.text;
        }
        setTimeout(() => {
            error.current.style.display = "none";
            error.current.textContent = "";
            success.current.style.display = "none";
            success.current.textContent = "";
        }, 3000);
    };
    const saveUser = type => {
        if (type) {
            let url = "http://localhost:8080/signup";

            __api__.postData(
                url,
                { name, email, password, image: base64Image },
                res => {
                    showMessage({ type: res.status, text: res.message });
                    setTimeout(() => {
                        setCookie("user_id", res.data.user_id);
                        setCookie("user_token", res.token);
                        dispatch({ type: "LOGIN_SUCCESS", payload: res.token });
                        dispatch({ type: "SAVE_USER_INFO", payload: res.data });
                        navigate("/");
                    }, 1000);
                }
            );
        } else {
            showMessage({ type: "error", text: "Something Went Wrong !" });
        }
    };
    const SubmitForm = e => {
        e.preventDefault();
        if (name === "") {
            showMessage({ type: "error", text: "User Name Is Required !" });
        } else if (typeof checkName(name) === "string") {
            showMessage({ type: "error", text: checkName(name) });
        } else if (email === "") {
            showMessage({ type: "error", text: "User Email Is Required !" });
        } else if (typeof checkEmail(email) === "string") {
            showMessage({ type: "error", text: checkEmail(email) });
        } else if (password === "") {
            showMessage({ type: "error", text: "User Password Is Required !" });
        } else if (password.length <= 5) {
            showMessage({
                type: "error",
                text: "Password Must Be 6 Characters !"
            });
        } else {
            saveUser(true);
        }
    };
    return (
        <>
            <div className="form">
                <label htmlFor="avtar">
                    <img
                        id="std-img"
                        src={file ? URL.createObjectURL(file) : gallary}
                    />
                </label>
                <input
                    type="file"
                    id="avtar"
                    onChange={previewImg}
                    hidden="true"
                />
                <p ref={error} id="error"></p>
                <p ref={success} id="success"></p>
                <input
                    onChange={e => {
                        setName(e.target.value);
                    }}
                    name="email"
                    type="text"
                    id="name"
                    placeholder="Enter Student Name"
                />
                <input
                    onChange={e => {
                        setEmal(e.target.value);
                    }}
                    name="email"
                    type="email"
                    id="email"
                    placeholder="Enter Student Email"
                />
                <input
                    onChange={e => {
                        setPassword(e.target.value);
                    }}
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Enter Student Password"
                />
                <button id="btn" onClick={SubmitForm}>
                    Create Now
                </button>
                <span id="info">
                    Already Have An Account ?
                    <NavLink to="/login"> Login</NavLink>
                </span>
            </div>
        </>
    );
};

export default Signup;
