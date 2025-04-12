import React from "react";
import '../../css/SandClock.css';

function SandClock() {
    return (
        <>
            <div className="box-canvas">
                <div className="frame">
                    <div className="top"></div>
                    <div className="bottom">
                        <div className="drip"></div>
                        <div className="blob"></div>
                        <div className="glass"></div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SandClock;