import React, { useState } from "react";
import book_scan from "../assets/img/book_scan.webp";
import aligners from "../assets/img/aligners.webp";
import consultation from "../assets/img/consultation.webp";
import virtual from "../assets/img/virtual.webp";
import Text from "./Text";
import "../assets/css/accordian.css";

const images = [book_scan, consultation, virtual, aligners];

const Accordian = () => {
    const [index, setIndex] = useState(0);

    return (
        <div>
            <div className="grid-container">
                <div className="grid__info">
                    <div onClick={() => setIndex(0)}>
                        <Text
                            title="01. BOOK A SESSION/ORDER AN IMPRESSION KIT"
                            description="Call for a scan at your home or order our impression
                            kit. It’s quick and easy."
                        />
                    </div>

                    <div onClick={() => setIndex(1)}>
                        <Text
                            title="02. ASSESMENT AT HOME"
                            description="We visit, conduct the scan/pick up the impression kit
                            and offer assessment."
                        />
                    </div>
                    <div onClick={() => setIndex(2)}>
                        <Text
                            title="03. GET VIRTUAL RESULT"
                            description="Our team of orthodontists and techies will prepare your
                            custom digital smile makeover plan. Once you approve
                            your plan, we fabricate your aligners."
                        />
                    </div>
                    <div onClick={() => setIndex(3)}>
                        <Text
                            title="04. ALIGNERS ARE DELIVERED"
                            description=" We home-deliver aligners that are ready to use. Post
                            this, we are always available for constant support."
                        />
                    </div>
                </div>
                <div className="grid__img">
                    <img src={images[index]} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Accordian;
