import React from "react";
import ReactConfetti from "react-confetti";

export default function Confetti() {
    return (
        <>
           <h3 className="confetti--title">
                <span style={{color:'red'}}>Con</span>
                <span style={{color:'orange'}}>gra</span>
                <span style={{color:'yellow'}}>tul</span>
                <span style={{color:'green'}}>ati</span>
                <span style={{color:'blue'}}>ons</span>
                <span style={{color:'indigo'}}>!!!</span>
            </h3>
            <small style={{color:"white"}}>&#169;2023 jpdevop</small>
           <ReactConfetti 
           height={560}
           width={800} className="confetti"/>
        </>
    )
}