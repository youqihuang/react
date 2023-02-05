import React from 'react'
import AboutBackground from "../assets/about.png";
import "../styles/About.css";

function About() {
  return (
    <div className="about">
        <div 
        className="aboutTop"
        style={{ backgroundImage: `url(${AboutBackground})` }}></div>
        <div className="aboutBottom">
        <h1>ABOUT US</h1>
        <p> Music taste can say a lot about someone. Through Connectify, find the people you can go to every concert with, people you can spontaneously break into dance with, people to scream songs at the top of your lungs with driving down the highway, and ultimately, the people you connect with the most.
        </p>
        </div>
      
    </div>
  )
}

export default About
