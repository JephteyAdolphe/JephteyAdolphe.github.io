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
                <img src={require("../headshot.jpg")} alt="" />
            </div>
            <p className="paragraph">Hello! I’m Jephtey (Jeff) Adolphe, a Senior at Rutgers University New Brunswick studying</p>
            <p className="paragraph">Electrical Engineering and Computer Science.</p>
            <p className="paragraph">I just wrapped up an 8-month internship at Schindler Elevator Corporation this past Summer in 2020</p>
            <p className="paragraph">where I learned a lot about working with complex electrical systems and working with other engineers.</p>
            <p className="paragraph">Teamwork and communication were two of the biggest things that I learned during my internship</p>
            <p className="paragraph">since I also had to work remotely at times due to the Covid-19 outbreak which has definitely</p>
            <p className="paragraph">improved my performance and collaboration skills in my class projects as well as work.</p>
            <p className="paragraph">Currently I am interning at Jefferies as a Technology Analyst where I am developing and</p>
            <p className="paragraph">maintaining internal applications for my division. In my free time, besides playing LOTS of basketball</p>
            <p className="paragraph">and hanging out with friends, I have been working on my technical skills, specifically</p>
            <p className="paragraph">software development. As I enter my final semester this Fall, I will continue to polish my skills</p>
            <p className="paragraph">and become the best version of myself. I thank you for taking the time to read this!</p>
            <p className="paragraph">Jephtey... OUT</p>
            <p className="paragraph">(•_•)</p>
            <p className="paragraph">( •_•)⌐■-■</p>
            <p className="paragraph">(⌐■_■)</p>
            <p className="space">space</p>
        </div>
    )
}