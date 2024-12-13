import React from 'react';
import TableauEmbed from './TableauEmbed';
import { Link } from 'react-router-dom';
import logo from "../img/MikeMusasLogoMark Design_White.svg";

const CrimeAnalysis = () => {

    const tableauUrl = "https://public.tableau.com/views/Crimes-CityofLosAngeles/Dashboard2";  // Replace with your Tableau embed URL
    const options = {
        width: '1300px',
        height: '900px',
        hideTabs: true,  // Optional: Hides Tableau tabs at the top
        hideToolbar: false,  // Optional: Shows/hides Tableau toolbar
    };

    const handleScrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      };


    return (
        <div className='project'>
            <div className='container'>
                <h1>Crime Analysis (City of Los Angeles)</h1>

                <h3>Overview</h3>

                <p>
                    The Crime Analysis Dashboard for the City of Los Angeles provides a detailed exploration of 
                    crime data from January 1, 2020, to October 14, 2024. It utilizes interactive visualizations 
                    to highlight trends in crime categories, demographic details of offenders and victims, and 
                    geographical crime patterns. The dashboard offers a comprehensive perspective to support law 
                    enforcement, policy-making, and community safety initiatives.
                </p>

                <br />
                <br />
                

                <div className="tableau-embed">
                    <TableauEmbed url={tableauUrl} options={options} />
                </div>


                <h3>Observations and Insights</h3>

                <ol>
                    <li>
                        <strong>Crime Surge in 2021</strong>:
                        The significant rise in crimes in 2021 demands an investigation into 
                        potential economic, social, or political factors contributing to this 
                        trend.
                    </li>
                    <li>
                        <strong>Harbor Region Focus</strong>:
                        With the highest number of crimes recorded, the Harbor area requires 
                        immediate resource allocation for crime prevention and community safety 
                        programs.
                    </li>
                    <li>
                        <strong>Theft and Burglary Dominance</strong>:
                        This category's prominence underscores the need for improved property 
                        security measures and public awareness campaigns.
                    </li>
                    <li>
                        <strong>Demographic Variations</strong>:
                        Higher crime percentages among certain racial and gender groups suggest 
                        the need for tailored outreach and community engagement initiatives.
                    </li>
                    <li>
                        <strong>Age Dynamics</strong>:
                        The prevalence of crimes among young adults highlights potential areas 
                        for youth-focused programs to deter criminal activity.
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

                </section>
                

            </div>
        </div>
    );
};


export default CrimeAnalysis;

