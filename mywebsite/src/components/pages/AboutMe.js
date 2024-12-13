// AboutPage.js
import React from 'react';
import myphoto from "../img/MikeMusasPhoto.png";
import birdposter from "../img/birdarts.png";
import hobbit from "../img/thehobbit.png";
import mockingbird from "../img/mockingbird.png";
import lesmiserables from "../img/lesmiserables.png";
import sports from "../img/sports.png";
import { HiOutlineExternalLink } from "react-icons/hi";

const AboutMe = () => {
  return (
    <div className='aboutme'>

      {/* ABOUT ME SECTION */}
      <div className='about-content'>
        
        <h1 className='about-title'>About Me</h1>

        <div className='about-me-section'>
          <div className='about-me-picture'>
            <img src={myphoto} alt="Mike "/>
          </div>
          <div className='about-me-description'>
            <p>
              Hi, I'm Mike, a Data Analyst at Southern Utah University. I enjoy working 
              with data to uncover valuable insights that inform business decision-making. 
              I have more than five years of experience using Microsoft Excel, more than 
              two years using Python, Tableau Desktop and SQL.
            </p>
            <br/>
            <p>
              In my free time, I have a variety of hobbies and interests, including new 
              technologies, reading, comics, sports (Tennis and Soccer), and instrumental 
              music. Music plays a significant role in my daily life, whether I'm studying, 
              working, or relaxing. I'm also a big fan of visual design; during my leisure 
              hours, I enjoy designing posters.
            </p>

            <br/>
            <br/>

            <a href='https://www.linkedin.com/in/mike-musas/' target="_blank" rel="noreferrer">
              <button className="btn">
                  Let's Connect <span><HiOutlineExternalLink size={25} /></span>
              </button>
            </a>

            <div className='email-me'>
              <p>Email Me: <span>mike.k.musas@gmail.com</span></p>
            </div>
            
          </div>
        </div>
      </div>

      {/* RESUME SECTION */}
      <section className='resume'>
        <div className='resume-container'>
          <h1>My Resume</h1>
          <hr/>

          <section className='education'>
            <h2>Education</h2>
            <section>
              <div>
                <h4>M.S. Business Analytics</h4>
                <p>Southern Utah University</p>
              </div>

              <div>
                <p>Aug '22 - Aug '24</p>
              </div>
              
            </section>

            <section>
            
              <div>
                <h4>B.S. Industrial Engineering</h4>
                <p>Cyprus International University</p>
              </div>

              <div>
                <p>Feb '17 - Jun '21</p>
              </div>
              
            </section>

          </section>

          {/* EXPERIENCES */}
          <section className='experiences'>
            <h2>Experiences</h2>

            <section>
              <div>
                <h4>Park Data Web Developer</h4>
                <p>Southern Utah University & Outdoor Pathways</p>
              </div>

              <div>
                <p>Nov '24 - Current</p>
              </div>
            </section>

            <section>
              <div>
                <h4>Data Analyst</h4>
                <p>Southern Utah University</p>
              </div>

              <div>
                <p>Feb '24 - Current</p>
              </div>
            </section>

            <section>
              <div>
                <h4>MS-CSIA Graduate Assistant</h4>
                <p>Southern Utah University</p>
              </div>

              <div>
                <p>Jun '23 - Aug '24</p>
              </div>
            </section>

            <section>
              <div>
                <h4>Analyst & Graphic Designer</h4>
                <p>Root Tech</p>
              </div>

              <div>
                <p>Aug '21 - Jul '22</p>
              </div>
            </section>

            <section>
              <div>
                <h4>Industrial Engineer Intern</h4>
                <p>Minerals and Metals Group (MMG)</p>
              </div>

              <div>
                <p>Jul '19 - Aug '19</p>
              </div>
            </section>

          </section>

          {/* SKILLS */}
          <section className='skills'>
            <h2>Skills</h2>
            <section>
              <div>
                <h4>Data Analytics</h4>
                <ul>
                  <li>Tableau Desktop</li>
                  <li>Power BI</li>
                  <li>Looker Studio</li>
                  <li>Python</li>
                  <li>SQL</li>
                  <li>Microsoft Office Suite</li>
                </ul>
              </div>
            </section>

            <section>
              <div>
                <h4>Web Development</h4>
                <ul>
                  <li>HTML/CSS</li>
                  <li>Javascript</li>
                  <li>React</li>
                </ul>
              </div>
            </section>

            <section>
              <div>
                <h4>Tools & Platforms</h4>
                <ul>
                  <li>Git & GitHub</li>
                  <li>AWS</li>
                </ul>
              </div>
            </section>

          </section>

        </div>

      </section>

      {/* HOBBIES */}
      <section className='hobbies'>
        <div className='hobbies-container'>
          <h1>Hobbies & Interests</h1>
          

          <section className='design-hobbies'>
            <div className='bird-poster'>
              <img src={birdposter} alt="Bird Posters"/>
            </div>
            <div className='bird-poster-description'>
              <p>
                When I'm not immersed in data, I explore my creative side through poster 
                design arts, crafting visually striking and meaningful pieces that reflect my passion 
                for aesthetics and storytelling.
              </p>

              <a href='https://www.behance.net/mikemusaskaband' target="_blank" rel="noreferrer">
                <button className="btn">
                    Design Works <span><HiOutlineExternalLink size={25} /></span>
                </button>
              </a>
            </div>
          </section>

          <section className='other-hobbies'>
              <section>
                <div className='sports'>
                  <h4>Sports</h4>
                  <div>
                    <img src={sports} alt="Sports"/>
                  </div>
                </div>
              </section>

              <section>
                <div className='books'>
                  <h4>Favorite Books</h4>
                  <div>
                    <img src={hobbit} alt="The Hobbit"/>
                    <img src={mockingbird} alt="To Kill a Mockingbird"/>

                  </div>
                </div>
              </section>

              <section>
                <div className='broadway'>
                  <h4>Broadway</h4>
                  <div>
                    <img src={lesmiserables} alt="Les Miserables"/>
                  </div>
                </div>
              </section>

            </section>

          </div>

      </section>
      
    </div>
  );
};

export default AboutMe;
