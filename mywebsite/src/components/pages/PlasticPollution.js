import React from 'react';
import TableauEmbed from './TableauEmbed';
import { Link } from 'react-router-dom';
import logo from "../img/MikeMusasLogoMark Design_White.svg";

const PlasticPollution = () => {

    const tableauUrl = "https://public.tableau.com/views/plastic_pollution/PlasticPollutionReport";  // Replace with your Tableau embed URL
    const options = {
        width: '1300px',
        height: '950px',
        hideTabs: true,  // Optional: Hides Tableau tabs at the top
        hideToolbar: false,  // Optional: Shows/hides Tableau toolbar
    };

    const handleScrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      };

    return (
        <div className='project'>
            <div className='container'>
                <h1>Plastic Pollution Analysis</h1>

                <h3>Overview</h3>

                <p>
                    The Plastic Pollution Dashboard was designed to raise awareness about the 
                    escalating issue of plastic pollution globally. By presenting key insights 
                    into plastic production, waste management practices, and regional contributions 
                    to pollution, the dashboard aims to inform decision-makers, researchers, and 
                    the public about the critical need for sustainable practices.
                </p>
                <p>
                    Plastic pollution has become one of the most pressing environmental challenges 
                    of our time. Since the invention of synthetic plastics in 1907, their production 
                    has grown exponentially, leading to significant environmental consequences. This 
                    dashboard visualizes critical data on plastic production trends, global plastic 
                    waste management practices, and the environmental impact of plastic pollution.
                </p>
                
                <br />
                <br />

                <div className="tableau-embed">
                    <TableauEmbed url={tableauUrl} options={options} />
                </div>


                <h3>Observations and Insights</h3>

                <ol>
                    <li>
                        <strong>Urgency</strong>:
                        Plastic pollution continues to grow at alarming rates, necessitating global cooperation for mitigation.
                    </li>
                    <li>
                        <strong>Regional Disparities</strong>:
                        Developing nations require greater infrastructure support for waste management.
                    </li>
                    <li>
                        <strong>Recycling Gaps</strong>:
                        Even regions with high recycling rates need to reduce reliance on landfilling and incineration to achieve a circular economy.
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

                </section>
                

            </div>
        </div>
    );
};


export default PlasticPollution;

