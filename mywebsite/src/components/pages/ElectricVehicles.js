import React from 'react';
import TableauEmbed from './TableauEmbed';
import { Link } from 'react-router-dom';
import logo from "../img/MikeMusasLogoMark Design_White.svg";

const ElectricVehicles = () => {

    const tableauUrl = "https://public.tableau.com/views/electic_vehicle_population/ElectricVehiclePopulationDashboard";  // Replace with your Tableau embed URL
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
                <h1>Electric Vehicle Population Dashboard</h1>

                <h3>Overview</h3>

                <p>
                    The Electric Vehicle (EV) Population Dashboard provides a comprehensive view of 
                    the adoption and characteristics of electric vehicles across the United States. 
                    Designed to present key metrics and trends, this dashboard highlights manufacturers, 
                    vehicle types, and regional distribution of EVs. It aims to inform stakeholders about 
                    the state of EV adoption and provide actionable insights into market trends.
                </p>

                <br />
                <br />

                <div className="tableau-embed">
                    <TableauEmbed url={tableauUrl} options={options} />
                </div>


                <h3>Observations and Insights</h3>

                <ol>
                    <li>
                        <strong>Market Leadership</strong>:
                        <ul>
                            <li>
                                Tesla's dominance in both volume and range solidifies its position as 
                                the market leader in the EV space. However, other manufacturers are 
                                steadily catching up with competitive offerings.
                            </li>
                        </ul>
                    </li>
                    <li>
                        <strong>Regional Adoption</strong>:
                        <ul>
                            <li>
                                California's leadership in EV adoption highlights the impact of 
                                favorable policies, infrastructure, and public awareness. Replicating 
                                these strategies in other states could accelerate national adoption.
                            </li>
                        </ul>
                    </li>
                    <li>
                        <strong>Vehicle Type Trends</strong>:
                        <ul>
                            <li>
                                The high percentage of BEVs over PHEVs signals a market preference 
                                for fully electric solutions. This trend aligns with advancements in 
                                battery technology and charging infrastructure.
                            </li>
                        </ul>
                    </li>
                    <li>
                        <strong>Luxury Market Expansion</strong>:
                        <ul>
                            <li>
                                Premium EV offerings from Porsche, Tesla, and Fisker indicate a 
                                growing market segment focused on high-performance and luxury EVs.
                            </li>
                        </ul>
                    </li>
                    <li>
                        <strong>Range Innovations</strong>:
                        <ul>
                            <li>
                                Manufacturers with extensive ranges (e.g., Tesla, Chevrolet) are 
                                likely to appeal to consumers prioritizing longer driving distances, 
                                a key factor in EV adoption.
                            </li>
                        </ul>
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

                </section>

            </div>
        </div>
    );
};


export default ElectricVehicles;

