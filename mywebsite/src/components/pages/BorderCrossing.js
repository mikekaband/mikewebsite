import React from 'react';
import TableauEmbed from './TableauEmbed';
import { Link } from 'react-router-dom';
import logo from "../img/MikeMusasLogoMark Design_White.svg";

const BorderCrossing = () => {

    const tableauUrl = "https://public.tableau.com/views/USBorderCrossingEntryDashboard/USBorderCrossingsReport";  // Replace with your Tableau embed URL
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
                <h1>US Border Crossing Entry with Canada and Mexico</h1>

                <h3>Overview</h3>

                <p>
                    This dashboard provides a comprehensive overview of border crossings between 
                    the United States, Canada, and Mexico from 1996 to 2023.
                </p>
                
                <br />
                <br />

                <div className="tableau-embed">
                    <TableauEmbed url={tableauUrl} options={options} />
                </div>


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


export default BorderCrossing;

