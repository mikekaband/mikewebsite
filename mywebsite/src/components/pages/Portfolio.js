import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../img/MikeMusasLogoMark Design_White.svg";

const Portfolio = () => {

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };


  return (
    <div>
      <div className='container'>
        
        {/* FEATURED PORTFOLIO SECTION */}
        <section className='portfolio-title'>
          <hr/>
          <h1>FEATURED PORTFOLIO</h1>
          <p>Explore a curated collection of my most impactful projects, showcasing creativity, technical expertise, and problem-solving abilities across diverse domains.</p>
        </section>

        {/* PORTFOLIO CARDS SECTION */}
        <section className='portfolio-cards'>
          <Link to="/trafficfatalities" className='portfolio-card' id='road-traffic' onClick={handleScrollToTop}>
              
              <div className='gradient'></div>
              <div className='descriptions'>
                <div>
                  <h4>Road Traffic Fatalities</h4>
                  <p>Dashboard</p>
                </div>
                <img src={logo} alt="Mike Logo" width={50} fill="white"/>
              </div>
              
          </Link>

          <Link to="/superstoresales" className='portfolio-card' id='superstore' onClick={handleScrollToTop}>
              
              <div className='gradient'></div>
              <div className='descriptions'>
                <div>
                  <h4>Super Store Sales</h4>
                  <p>Dashboard</p>
                </div>
                
                <img src={logo} alt="Mike Logo" width={50} fill="white"/>
              </div>
              
          </Link>

          <Link to="/meteoritelandings" className='portfolio-card' id='meteorite-landings' onClick={handleScrollToTop}>
              
              <div className='gradient'></div>
              <div className='descriptions'>
                <div>
                  <h4>Meteorite Landings</h4>
                  <p>Dashboard</p>
                </div>
                
                <img src={logo} alt="Mike Logo" width={50} fill="white"/>
              </div>
              
          </Link>

          <Link to="https://github.com/musasmike/applied_data_science_capstone" className='portfolio-card' id='spacex' target="_blank" rel="noreferrer">
                  
              <div className='gradient'></div>
              <div className='descriptions'>
                <div>
                  <h4>SpaceX Rocket Landings</h4>
                  <p>Machine Learning</p>
                </div>
                
                <img src={logo} alt="Mike Logo" width={50} fill="white"/>
              </div>
              
          </Link>

        </section>



        {/* DATA VISUALIZATION SECTION */}
        <section className='portfolio-title'>
          <hr/>
          <h1>DATA VISUALIZATION</h1>
          <p>Dive into dynamic and insightful visual representations of complex data, designed to tell compelling stories and drive informed decision-making.</p>
        </section>

        {/* PORTFOLIO CARDS SECTION */}
        <section className='portfolio-cards'>
          <Link to="/crimeanalysis" className='portfolio-card' id='crime-analysis' onClick={handleScrollToTop}>
              
              <div className='gradient'></div>
              <div className='descriptions'>
                <div>
                  <h4>Crime Analysis</h4>
                  <p>Dashboard</p>
                </div>
                
                <img src={logo} alt="Mike Logo" width={50} fill="white"/>
              </div>
              
          </Link>

          <Link to="/realestate" className='portfolio-card' id='real-estate' onClick={handleScrollToTop}>
              
              <div className='gradient'></div>
              <div className='descriptions'>
                <div>
                  <h4>Real Estate Analysis</h4>
                  <p>Dashboard</p>
                </div>
                
                <img src={logo} alt="Mike Logo" width={50} fill="white"/>
              </div>
              
          </Link>

          <Link to="/electricvehicles" className='portfolio-card' id='electric-vehicles' onClick={handleScrollToTop}>
              
              <div className='gradient'></div>
              <div className='descriptions'>
                <div>
                  <h4>Electric Vehicles</h4>
                  <p>Dashboard</p>
                </div>
                
                <img src={logo} alt="Mike Logo" width={50} fill="white"/>
              </div>
              
          </Link>

          <Link to="/plasticpollution" className='portfolio-card' id='plastic-pollution' onClick={handleScrollToTop}>
              
              <div className='gradient'></div>
              <div className='descriptions'>
                <div>
                  <h4>Plastic Pollution Analysis</h4>
                  <p>Dashboard</p>
                </div>
                
                <img src={logo} alt="Mike Logo" width={50} fill="white"/>
              </div>
              
          </Link>
          
          <Link to="/bordercrossing" className='portfolio-card' id='border-crossing' onClick={handleScrollToTop}>
              
              <div className='gradient'></div>
              <div className='descriptions'>
                <div>
                  <h4>Border Crossing</h4>
                  <p>Dashboard</p>
                </div>
                
                <img src={logo} alt="Mike Logo" width={50} fill="white"/>
              </div>
              
          </Link>

          {/* <Link to="/portfolio" className='portfolio-card' onClick={handleScrollToTop}>
              
              <div className='gradient'></div>
              <div className='descriptions'>
                <div>
                  <h4>Project Title 1</h4>
                  <p>Dashboard</p>
                </div>
                
                <img src={logo} alt="Mike Logo" width={50} fill="white"/>
              </div>
              
          </Link> */}
          

        </section>



        {/* DATA ANALYTICS & MACHINE LEARNING SECTION */}
        <section className='portfolio-title'>
          <hr/>
          <h1>DATA ANALYTICS & MACHINE LEARNING</h1>
          <p>Discover how advanced algorithms and analytical techniques are leveraged to uncover patterns, build predictive models, and solve real-world problems effectively.</p>
        </section>

        {/* PORTFOLIO CARDS SECTION */}
        <section className='portfolio-cards'>

          <Link to="https://github.com/musasmike/beer_data_analysis" className='portfolio-card' id='beer' target="_blank" rel="noreferrer">
              
              <div className='gradient'></div>
              <div className='descriptions'>
                <div>
                  <h4>Beer Data Analysis</h4>
                  <p>Data Analysis</p>
                </div>
                
                <img src={logo} alt="Mike Logo" width={50} fill="white"/>
              </div>
              
          </Link>

          <Link to="https://github.com/mikekaband/breastcancer" className='portfolio-card' id='breast-cancer' target="_blank" rel="noreferrer">
              
              <div className='gradient'></div>
              <div className='descriptions'>
                <div>
                  <h4>Breast Cancer Detection</h4>
                  <p>Machine Learning</p>
                </div>
                
                <img src={logo} alt="Mike Logo" width={50} fill="white"/>
              </div>
              
          </Link>


        </section>
      </div>
    </div>
  );
};

export default Portfolio;
