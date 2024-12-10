import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../img/MikeMusasLogoMark Design_White.svg";

const Portfolio = () => {
  return (
    <div>
      <div className='container'>
        
        {/* FEATURED PORTFOLIO SECTION */}
        <section className='portfolio-title'>
          <hr/>
          <h1>FEATURED PORTFOLIO</h1>
          <p>Explore amazing dashboards built with a variety of tools such as Tableau Desktop, Looker Studio, Plotly dash, etc. 
          These projects includes topics such as data visualization, machine learning, data analysis.</p>
        </section>

        {/* PORTFOLIO CARDS SECTION */}
        <section className='portfolio-cards'>
          <Link to="/portfolio" className='portfolio-card'>
              
              <div className='gradient'></div>
              <div className='descriptions'>
                <div>
                  <h4>Project Title 1</h4>
                  <p>Dashboard</p>
                </div>
                
                <img src={logo} alt="Mike Logo" width={50} fill="white"/>
              </div>
              
          </Link>

          <Link to="/portfolio" className='portfolio-card'>
              
              <div className='gradient'></div>
              <div className='descriptions'>
                <div>
                  <h4>Project Title 1</h4>
                  <p>Dashboard</p>
                </div>
                
                <img src={logo} alt="Mike Logo" width={50} fill="white"/>
              </div>
              
          </Link>

          <Link to="/portfolio" className='portfolio-card'>
              
              <div className='gradient'></div>
              <div className='descriptions'>
                <div>
                  <h4>Project Title 1</h4>
                  <p>Dashboard</p>
                </div>
                
                <img src={logo} alt="Mike Logo" width={50} fill="white"/>
              </div>
              
          </Link>

          <Link to="/portfolio" className='portfolio-card'>
              
              <div className='gradient'></div>
              <div className='descriptions'>
                <div>
                  <h4>Project Title 1</h4>
                  <p>Dashboard</p>
                </div>
                
                <img src={logo} alt="Mike Logo" width={50} fill="white"/>
              </div>
              
          </Link>

        </section>



        {/* DATA VISUALIZATION SECTION */}
        <section className='portfolio-title'>
          <hr/>
          <h1>DATA VISUALIZATION</h1>
          <p>Explore amazing dashboards built with a variety of tools such as Tableau Desktop, Looker Studio, Plotly dash, etc. 
          These projects includes topics such as data visualization, machine learning, data analysis.</p>
        </section>

        {/* PORTFOLIO CARDS SECTION */}
        <section className='portfolio-cards'>
          <Link to="/portfolio" className='portfolio-card'>
              
              <div className='gradient'></div>
              <div className='descriptions'>
                <div>
                  <h4>Project Title 1</h4>
                  <p>Dashboard</p>
                </div>
                
                <img src={logo} alt="Mike Logo" width={50} fill="white"/>
              </div>
              
          </Link>

          <Link to="/portfolio" className='portfolio-card'>
              
              <div className='gradient'></div>
              <div className='descriptions'>
                <div>
                  <h4>Project Title 1</h4>
                  <p>Dashboard</p>
                </div>
                
                <img src={logo} alt="Mike Logo" width={50} fill="white"/>
              </div>
              
          </Link>

          <Link to="/portfolio" className='portfolio-card'>
              
              <div className='gradient'></div>
              <div className='descriptions'>
                <div>
                  <h4>Project Title 1</h4>
                  <p>Dashboard</p>
                </div>
                
                <img src={logo} alt="Mike Logo" width={50} fill="white"/>
              </div>
              
          </Link>

          <Link to="/portfolio" className='portfolio-card'>
              
              <div className='gradient'></div>
              <div className='descriptions'>
                <div>
                  <h4>Project Title 1</h4>
                  <p>Dashboard</p>
                </div>
                
                <img src={logo} alt="Mike Logo" width={50} fill="white"/>
              </div>
              
          </Link>
          
          <Link to="/portfolio" className='portfolio-card'>
              
              <div className='gradient'></div>
              <div className='descriptions'>
                <div>
                  <h4>Project Title 1</h4>
                  <p>Dashboard</p>
                </div>
                
                <img src={logo} alt="Mike Logo" width={50} fill="white"/>
              </div>
              
          </Link>

          <Link to="/portfolio" className='portfolio-card'>
              
              <div className='gradient'></div>
              <div className='descriptions'>
                <div>
                  <h4>Project Title 1</h4>
                  <p>Dashboard</p>
                </div>
                
                <img src={logo} alt="Mike Logo" width={50} fill="white"/>
              </div>
              
          </Link>
          

        </section>



        {/* DATA ANALYTICS & MACHINE LEARNING SECTION */}
        <section className='portfolio-title'>
          <hr/>
          <h1>DATA ANALYTICS & MACHINE LEARNING</h1>
          <p>Explore amazing dashboards built with a variety of tools such as Tableau Desktop, Looker Studio, Plotly dash, etc. 
          These projects includes topics such as data visualization, machine learning, data analysis.</p>
        </section>

        {/* PORTFOLIO CARDS SECTION */}
        <section className='portfolio-cards'>
          <Link to="/portfolio" className='portfolio-card'>
              
              <div className='gradient'></div>
              <div className='descriptions'>
                <div>
                  <h4>Project Title 1</h4>
                  <p>Dashboard</p>
                </div>
                
                <img src={logo} alt="Mike Logo" width={50} fill="white"/>
              </div>
              
          </Link>

          <Link to="/portfolio" className='portfolio-card'>
              
              <div className='gradient'></div>
              <div className='descriptions'>
                <div>
                  <h4>Project Title 1</h4>
                  <p>Dashboard</p>
                </div>
                
                <img src={logo} alt="Mike Logo" width={50} fill="white"/>
              </div>
              
          </Link>

          <Link to="/portfolio" className='portfolio-card'>
              
              <div className='gradient'></div>
              <div className='descriptions'>
                <div>
                  <h4>Project Title 1</h4>
                  <p>Dashboard</p>
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
