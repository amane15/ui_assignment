import React from "react";
import "../assets/css/scroll.css";

const Scroll = () => {
    return (
        <div className="container">
            <div className="container1">
                <div className="item" style={{ backgroundColor: "red" }}></div>
                <div
                    className="item"
                    style={{ backgroundColor: "green" }}
                ></div>
                <div className="item" style={{ backgroundColor: "blue" }}></div>
                <div
                    className="item"
                    style={{ backgroundColor: "orange" }}
                ></div>
                <div
                    className="item"
                    style={{ backgroundColor: "yellow" }}
                ></div>
                <div
                    className="item"
                    style={{ backgroundColor: "purple" }}
                ></div>
                <div className="item" style={{ backgroundColor: "gray" }}></div>
                <div
                    className="item"
                    style={{ backgroundColor: "orangered" }}
                ></div>
                <div className="item" style={{ backgroundColor: "pink" }}></div>
                <div
                    className="item"
                    style={{ backgroundColor: "black" }}
                ></div>
            </div>
        </div>
    );
};

export default Scroll;
