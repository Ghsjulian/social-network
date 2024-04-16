"use strict";
import __api__ from "./Requester.js";

function _dom_(tag) {
    return document.querySelector(tag);
}

const obj = {
    name: "Ghs Julian",
    email: "78gh6dxx6xx@gmail.com",
    password: "234455",
    image: "",
    user_token:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiMjciLCJ1c2VyX25hbWUiOiJTaXlhIFJhaSIsInRpbWUiOjE3MTMxOTg4MDB9.N2NjMjM2ZmU2YWZjNWEzMmYxMzRkZmIzZTUwNDQ5MWEzYWQ1MTg4NTNmZTRhY2NmY2ZlOWE3MzFhODdiODlmYQ"
};
/*
let url = "http://localhost:8080/get-user";
__api__.postData(url, obj, res => {
    console.log(res);
});
*/
let url2 = "http://localhost:8080/get-user";
__api__.postData(url2, { user_id: 27 }, res => {
    console.log(res);
});
