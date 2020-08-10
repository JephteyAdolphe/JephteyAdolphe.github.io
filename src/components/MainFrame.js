import React from 'react'
import '../App.css';

export default function MainFrame() {
    return (
        <div>
            <div>
                <a href="https://jephtey-personal.herokuapp.com/">
                    <button className="back-button">Go Back</button>
                </a>
            </div>
            <h1 className="header">About Me</h1>
            <div className="center-pic">
                <img src={require("../picture.jpg")} alt="" />
            </div>
            <p className="paragraph">Hello! I’m Jephtey (Jeff) Adolphe, a Rising Senior at Rutgers University New Brunswick studying</p>
            <p className="paragraph">Electrical Engineering and Computer Science.</p>
            <p className="paragraph">I have just wrapped up an 8-month internship at Schindler Elevator Corporation where I learned</p>
            <p className="paragraph">a lot about working with complex electrical systems and working with other engineers.</p>
            <p className="paragraph">Teamwork and communication were two of the biggest things that I learned during my internship</p>
            <p className="paragraph">since I also had to work remotely at times due to the Covid-19 outbreak. At Rutgers, I am</p>
            <p className="paragraph">involved in two subdivisions of IEEE, the Electronics Club and the N2E (Novice 2 Expert)</p>
            <p className="paragraph">Coding Club. In the Electronics Club I have worked on mini projects involving the use of </p>
            <p className="paragraph">Arduino, Raspberry Pi, etc to gain some practical experience with different electrical devices. In</p>
            <p className="paragraph">the N2E club, I have participated in mini workshops involving various programming languages in</p>
            <p className="paragraph">order to gain extra experience through hands-on programming. Since my first time programming</p>
            <p className="paragraph">in the Winter of 2019, I have grown to love it and recently decided to take up a minor in</p>
            <p className="paragraph">Computer Science! In my free time, besides playing LOTS of basketball and hanging out with</p>
            <p className="paragraph">friends, I have been practicing with languages such as Python and Java through mini projects</p>
            <p className="paragraph">and assignments from my planned CS courses in an effort to build up my coding skills. I thank</p>
            <p className="paragraph">you for taking the time to read this!</p>
            <p className="space">space</p>
        </div>
    )
}