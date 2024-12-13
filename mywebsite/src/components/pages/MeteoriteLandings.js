import React from 'react';
import TableauEmbed from './TableauEmbed';
import { Link } from 'react-router-dom';
import logo from "../img/MikeMusasLogoMark Design_White.svg";

const MeteoriteLandings = () => {

    const tableauUrl = "https://public.tableau.com/views/Meteorite_Landings_Dashboard/MeteoriteLandingsAcrosstheWorld";  // Replace with your Tableau embed URL
    const options = {
        width: '1300px',
        height: '1200px',
        hideTabs: true,  // Optional: Hides Tableau tabs at the top
        hideToolbar: false,  // Optional: Shows/hides Tableau toolbar
    };

    const handleScrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      };

    return (
        <div className='project'>
            <div className='container'>
                <h1>Meteorite Landings</h1>

                <h3>Overview</h3>

                <p>
                    The "Meteorite Landings Across the World" dashboard provides an in-depth analysis of meteorite 
                    falls, illustrating where they have landed over time and highlighting the most significant 
                    meteorites in terms of mass. Designed to present both historical trends and geographic 
                    distributions, this project offers valuable insights into meteorite phenomena worldwide. 
                    The dashboard's interactive visualizations cater to scientists, educators, and enthusiasts 
                    eager to explore the mysteries of these extraterrestrial objects.
                </p>
                
                <br />
                <br />

                <div className="tableau-embed-landings">
                    <TableauEmbed url={tableauUrl} options={options} />
                </div>


                <h3>Observations and Insights</h3>

                <ol>
                    <li>
                        <strong>Geographic Bias in Records</strong>:
                        Regions with higher human populations or scientific activity (e.g., Europe and North America) 
                        tend to have more documented meteorite falls. Remote or sparsely populated areas may be 
                        underrepresented due to limited observation capabilities.
                    </li>
                    <li>
                        <strong>Increase in Recorded Falls Over Time</strong>:
                        Advances in technology and global networks for tracking meteorites have significantly improved 
                        documentation rates. The sharp rise in recorded falls after the 1800s reflects this trend.
                    </li>
                    <li>
                        <strong>Significance of the Hoba Meteorite</strong>:
                        Many meteorite falls remain unrecorded due to natural erosion, lack of access to remote 
                        locations, or historical limitations in observation methods.
                    </li>
                   
                </ol>
                
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />

                {/* EXPLORE MORE PROJECTS */}
                <h2 className='explore-more'>Explore More Projects</h2>

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

            </div>
        </div>
    );
};


export default MeteoriteLandings;

