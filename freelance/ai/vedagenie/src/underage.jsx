import React from "react";
import Navbar from "./nev";
import Questionnaire from "./componets/quescom";

function Underage() {
    return (
        <>
            <Navbar />
            <h1 className="mcqhd">Lets start the journey towards the healthy life</h1>
            <div className="qmain">
               
                <Questionnaire />
            </div>
        </>
    )
}
export default Underage;