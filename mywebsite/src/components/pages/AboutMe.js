// AboutPage.js
import React from 'react';
import myphoto from "../img/myphoto.jpg";

const AboutMe = () => {
  return (
    <div>

      <div className='about-content'>
        
        <h1>About Us</h1>

        <div className='about-me-section'>
          <img src={myphoto} alt="Mike Profile" />
          <div>
            <p>
              Hi, I'm Mike, a Data Analyst at Southern Utah University. I enjoy working 
              with data to uncover valuable insights that inform business decision-making. 
              I have more than five years of experience using Microsoft Excel, more than 
              two years using Python, Tableau Desktop and SQL.
            </p>
            <p>
            In my free time, I have a variety of hobbies and interests, including new 
            technologies, reading, comics, sports (Tennis and Soccer), and instrumental 
            music. Music plays a significant role in my daily life, whether I'm studying, 
            working, or relaxing. I'm also a big fan of visual design; during my leisure 
            hours, I enjoy designing posters.
            </p>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default AboutMe;
