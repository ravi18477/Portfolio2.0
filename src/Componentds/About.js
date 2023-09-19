import React from 'react';
import "./style.css";
import {Link} from "react-router-dom";
import rightarrow from "../images/Logos/right-arrow.png";
import leftarrow from "../images/Logos/left-arrow.png";


function About() {
  return (
    <>
    <div className='about'>

<div className="skills"> 
        <li><b>Languages: </b> C/C++, Python, Javascript, HTML+CSS</li>
        <li><b>Libraries : </b>C++ STL, Python Libraries, ReactJs</li>
        <li><b>Frameworks: </b>ReactJs</li>
        <li><b>Cloud/Databases: </b>MongoDb, Relational Database(mySql)</li>
        <li><b>Relevent Coursework:</b>Data Structures & Algorithms, Operating Systems, Object Oriented Programming, Database
Management System, Software Engineering.</li>
<li><b>Areas of Interest:</b>Web Design and Development, software Development.</li>
<li><b>Soft Skills: </b>Problem Solving, Self-learning, Presentation, Adaptability</li>

 </div>
      <div className='aboutcontent'>
        <span><h3>About Me</h3></span>
        <br />
        <br />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur sint dolor quae! Itaque, odio ipsum autem neque iure doloremque praesentium officia, aliquid accusamus incidunt soluta aut temporibus blanditiis, iusto mollitia?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur sint dolor quae! Itaque, odio ipsum autem neque iure doloremque praesentium officia, aliquid accusamus incidunt soluta aut temporibus blanditiis, iusto mollitia?Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur sint dolor quae! Itaque, odio ipsum autem neque iure doloremque praesentium officia, aliquid accusamus incidunt soluta aut temporibus blanditiis, iusto mollitia?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur sint dolor quae! Itaque, odio ipsum autem neque iure doloremque praesentium officia, aliquid accusamus incidunt soluta.
        </p>
        <div className='details'>
          <div className='ques'>
            <span><b>Name:</b></span>
            <span><b>Email:</b></span>
          </div>

          <div className='ans'>
            <span>Ravi Kr Bhagat</span>
            <span>ravib18477@gmail.com</span>
          </div>

          <div className='ques'>
            <span><b>Phone</b></span>
            <span><b>City:</b></span>
          </div>
          <div className='ans'>
            <span>+91 9798356530</span>
            <span>Bhopal,MP</span>
          </div>

        </div>

      </div>
      </div>
      <footer className='footer'>
      <span> <Link to={"/"}><img className='logosfooter' src={leftarrow} alt="" /></Link></span>
          <span id='num'>2/3</span>
         <span> <Link to={""}><img className='logosfooter' src={rightarrow} alt="" /></Link></span>
      </footer>
      </>
  )
}

export default About
