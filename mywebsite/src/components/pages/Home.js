import React, { useEffect } from 'react';
import Typed from 'typed.js';
import profile from "../img/ProfilePicture.jpg";
import { HiOutlineExternalLink } from "react-icons/hi";
import { BsArrowRight } from "react-icons/bs";
import logo from "../img/MikeMusasLogoMark Design_White.svg";
import { Link } from 'react-router-dom';



const Home = () => {
    useEffect(() => {
        // Ensure the `.auto-type` element exists before initializing Typed.js
        const element = document.querySelector(".auto-type");
        if (element) {
            const typed = new Typed(".auto-type", {
                strings: ["Mike Musas", "A Data Analyst"],
                typeSpeed: 100,
                backSpeed: 20,
                loop: true,
            });

            // Cleanup Typed.js instance on component unmount
            return () => {
                typed.destroy();
            };
        }
    }, []); // Run only once after the initial render


  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

    return (
        <div>
          <div className='home-content'>
            <header>
                <img src={profile} alt="Mike Profile" />

                <div>
                    <div className="welcome-text">
                        <h4>Hello, I am </h4>
                        <h4><span className="auto-type"></span></h4>
                    </div>

                    <div>
                        <p>
                            I'm a passionate <span>data analyst</span> who enjoys working
                            with data to uncover valuable insights that inform
                            business decision-making.
                        </p>

                        <a href='https://www.linkedin.com/in/mike-musas/' target="_blank" rel="noreferrer">
                          <button className="btn">
                              Let's Connect <span><HiOutlineExternalLink size={25} /></span>
                          </button>
                        </a>
                    </div>
                </div>
            </header>

            {/* FEATURED PORTFOLIO SECTION */}
            <section className='featured-portfolio-title'>
              <h1>FEATURED PORTFOLIO</h1>
              <h4>Take a look at some of my work!</h4>
              <p>Explore amazing dashboards built with a variety of tools such as Tableau Desktop, Looker Studio, Plotly dash, etc. 
              These projects includes topics such as data visualization, machine learning, data analysis.</p>
            </section>

            {/* PORTFOLIO CARDS SECTION */}
            <section className='featured-portfolio-cards'>
              <Link to="/trafficfatalities" className='featured-portfolio-card' onClick={handleScrollToTop}>
                  
                  <div className='gradient'></div>
                  <div className='descriptions'>
                    <div>
                      <h4>U.S.A. Road Traffic Fatalities</h4>
                      <p>Dashboard</p>
                    </div>
                    
                    <img src={logo} alt="Mike Logo" width={50} fill="white"/>
                  </div>
                  
              </Link>

              <Link to="/superstoresales" className='featured-portfolio-card' onClick={handleScrollToTop}>
                  
                  <div className='gradient'></div>
                  <div className='descriptions'>
                    <div>
                      <h4>Super Store Sales</h4>
                      <p>Dashboard</p>
                    </div>
                    
                    <img src={logo} alt="Mike Logo" width={50} fill="white"/>
                  </div>
                  
              </Link>

              <Link to="/meteoritelandings" className='featured-portfolio-card' onClick={handleScrollToTop}>
                  
                  <div className='gradient'></div>
                  <div className='descriptions'>
                    <div>
                      <h4>Meteorite Landings</h4>
                      <p>Dashboard</p>
                    </div>
                    
                    <img src={logo} alt="Mike Logo" width={50} fill="white"/>
                  </div>
                  
              </Link>

              <Link to="https://github.com/musasmike/applied_data_science_capstone" className='featured-portfolio-card' target="_blank" rel="noreferrer">
                  
                  <div className='gradient'></div>
                  <div className='descriptions'>
                    <div>
                      <h4>SpaceX Rocket Landing Predictions</h4>
                      <p>Machine Learning</p>
                    </div>
                    
                    <img src={logo} alt="Mike Logo" width={50} fill="white"/>
                  </div>
                  
              </Link>

            </section>

            {/* EXPLORE MORE BUTTON */}
            <Link to="/portfolio" onClick={handleScrollToTop}>
              <button className="btn" id='explore-more'>
                  Explore More <span><BsArrowRight size={25} /></span>
              </button>
            </Link>

            </div>



        </div>
    );
};

export default Home;
