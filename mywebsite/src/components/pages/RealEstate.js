import React from 'react';
import TableauEmbed from './TableauEmbed';
import { Link } from 'react-router-dom';
import logo from "../img/MikeMusasLogoMark Design_White.svg";

const RealEstate = () => {

    const tableauUrl = "https://public.tableau.com/views/RealEstateSalesDashboard_17228429219500/RealEstateSalesDashboard-SaleValue";  // Replace with your Tableau embed URL
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
                <h1>Real Estate Sales</h1>

                <h3>Overview</h3>

                <p>
                    The Real Estate Sales Dashboard provides an insightful analysis of sales trends, 
                    property values, and transaction volumes over the years 2010 to 2022. Designed 
                    for stakeholders in the real estate sector, this dashboard showcases key metrics, 
                    including sales values, assessed values, and the composition of property types 
                    sold. It serves as a valuable tool for evaluating market dynamics and formulating 
                    data-driven strategies.
                </p>

                <br />
                <br />
                

                <div className="tableau-embed">
                    <TableauEmbed url={tableauUrl} options={options} />
                </div>

                <h3>Observations and Insights</h3>

                <ol>
                    <li>
                        <strong>Market Dynamics</strong>:
                        <ul>
                            <li>The sharp growth in sales value around 2020-2021 may correlate with broader economic factors such as housing demand surges or favorable market conditions during the pandemic era.</li>
                            <li>Despite this growth, a slight decline in sales value after 2021 suggests potential market corrections or cooling trends.</li>
                        </ul>
                    </li>
                    <li>
                        <strong>Residential Market Dominance</strong>:
                        <ul>
                            <li>The market's heavy reliance on residential property sales suggests opportunities for diversification into commercial or mixed-use properties.</li>
                        </ul>
                    </li>
                    <li>
                        <strong>Sales vs. Assessed Values</strong>:
                        <ul>
                            <li>The divergence between assessed and sales values in recent years may indicate overvaluation or speculative activity in the market.</li>
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


export default RealEstate;

