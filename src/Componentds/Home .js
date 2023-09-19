import React from 'react'
import './style.css';
import facebook from "../images/Logos/facebook.png";
import github from  "../images/Logos/github.png";
import insta from  "../images/Logos/instagram.png";
import linkedin from  "../images/Logos/linkedin.png";
import leftarrow from "../images/Logos/left-arrow.png";
import rightarrow from "../images/Logos/right-arrow.png";


import {Link} from "react-router-dom";


function Home () {
  return (
    <div className='home'>
        
        <div className='contacts'>
                <div className='logoContainer'>
                    
                    <a href="https://www.linkedin.com/in/ravi-kr-bhagat/" target="_blank" rel="noopener noreferrer"><img className='logos' src={linkedin}></img></a>
                    <a href="https://github.com/ravi18477" target="_blank" rel="noopener noreferrer"><img className='logos' src={github}></img></a>
                    <a ><img className='logos' src={insta}></img></a>
                    <a  ><img className='logos' src={facebook}></img></a>
                    <ul></ul>
                </div>
        <br />
        <br />
        <h1>I'am a Designer</h1>
        <br />
        <p>I'am a  fullstack developer having knowledge of React, Node, ExpressJs. My  expertise is to create and design websites, Apps and many more... </p>
        </div>

        <footer className='footer'>
          <span>1/3</span>
         <span> <Link to={"/about"}><img className='logosfooter' src={rightarrow} alt="" /></Link></span>
        </footer>
          
        

    </div>
  )
}

export default Home 
