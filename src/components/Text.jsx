import React, { useState } from "react";
import { HiPlus } from "react-icons/hi";
import { HiMinus } from "react-icons/hi";
import "../assets/css/accordian.css";

const Text = ({ title, description, img }) => {
    const [show, setShow] = useState(false);

    const handleShow = () => {
        setShow(!show);
    };

    return (
        <div className={show ? "active" : ""}>
            <div className="bar" onClick={handleShow}>
                <span className="bar__title">{title}</span>
                {show ? (
                    <HiMinus className="icon" size={20} />
                ) : (
                    <HiPlus className="icon" size={20} />
                )}
            </div>
            <div className="border"></div>
            {show && (
                <div className="mobile__img">
                    <img src={img} alt="" />
                </div>
            )}
            {show && <p className="bar__description">{description}</p>}
        </div>
    );
};

export default Text;
