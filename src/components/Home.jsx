import React, { useRef, useEffect, useState } from "react";
import "../assets/css/main--row.css";
import { useAuth } from "../context/useAuth";

const Home = () => {
   const { userId } = useAuth();
    return (
        <>
            <div className="grid-element">1</div>
            <div className="grid-element">2</div>
            <div className="grid-element">3</div>
            <div className="grid-element">4</div>
            <div className="grid-element">5</div>
            <div className="grid-element">6</div>
            <div className="grid-element">7</div>
            <div className="grid-element">8</div>
            <div className="grid-element">9</div>
            <div className="grid-element">10</div>
            <div className="grid-element">11</div>
            <div className="grid-element">12</div>
            <div className="grid-element">13</div>
            <div className="grid-element">14</div>
            <div className="grid-element">14</div>
            <div className="grid-element">16</div>
            {/*
            <div className="row-->">
                <div className="box-->">
                    <h2>Home Page</h2>
                </div>
                <div className="box-->">
                    <h2>Home Page</h2>
                </div>
                <div className="box-->">
                    <h2>Home Page</h2>
                </div>
            </div>
            */}
        </>
    );
};

export default Home;
