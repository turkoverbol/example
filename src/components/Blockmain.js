import React from 'react'
import Frame from '../assets/img/Frame.png'
import './blockmain.css'

const Blockmain = () => {
    return (
        <>
        <div className="mainblock">
            <div className="mainblock__title">
                <h1 className="title__zogo">How the scenes fit together</h1>
                <p className="title__paragraf">Employee Training & Development, Diversity & Inclusion Programs, and Conflict Resolution.</p>
            </div>
            <img src={Frame} alt="" className="mainblock__img" />
        </div>
        <div className="zogolovok">
            <h2 className="zogolovok__text">Consider everyone's best interest</h2>
            <p className="zogolovok__paragr">HR is for everyone. Clerksy can help you.</p>
        </div>
        </>
    )
}
export default Blockmain;