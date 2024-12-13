import React from 'react';
import TableauEmbed from './TableauEmbed';
import { Link } from 'react-router-dom';
import logo from "../img/MikeMusasLogoMark Design_White.svg";

const SuperStoreSales = () => {

    const tableauUrl = "https://public.tableau.com/views/SuperStoreSalesDashboard_17303004967540/Overview";  // Replace with your Tableau embed URL
    const options = {
        width: '1300px',
        height: '850px',
        hideTabs: true,  // Optional: Hides Tableau tabs at the top
        hideToolbar: false,  // Optional: Shows/hides Tableau toolbar
    };

    const handleScrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      };

    return (
        <div className='project'>
            <div className='container'>
                <h1>Super Store Sales</h1>

                <h3>Overview</h3>

                <p>
                The MK's Store Performance Dashboard provides a comprehensive analysis 
                of the store's sales, profits, and operational trends over multiple 
                years. Designed to deliver actionable insights, this dashboard features 
                interactive visualizations that highlight key performance indicators 
                (KPIs), trends, and regional performance metrics. It is a valuable tool 
                for tracking progress and identifying growth opportunities.
                </p>

                <br />
                <br />
                

                <div className="tableau-embed">
                    <TableauEmbed url={tableauUrl} options={options} />
                </div>

                <h3>Observations and Insights</h3>

                <ol>
                    <li>
                        <strong>Sales Growth vs. Profit Decline</strong>:
                        While total sales show an upward trajectory, the significant drop
                         in profit (e.g., 52.3% in December 2014) suggests increased costs, 
                         discounts, or inefficiencies.
                    </li>
                    <li>
                        <strong>High Discount Rate</strong>:
                        A 14.62% average discount rate in December 2014 may have 
                        contributed to the profit decline. While this may boost sales 
                        volume (27% increase in quantity sold), it erodes profitability.
                    </li>
                    <li>
                        <strong>Geographic Disparities</strong>:
                        Certain states underperform significantly in terms of profit, 
                        indicating potential inefficiencies or market-specific 
                        challenges. A targeted regional strategy could address this 
                        imbalance.
                    </li>
                    <li>
                        <strong>Category-Specific Opportunities</strong>:
                        <ul>
                            <li><strong>Furniture</strong>: Optimize inventory and reduce discounts for Tables to mitigate losses.</li>
                            <li><strong>Technology</strong>: Leverage high-performing subcategories like Phones to drive profit while reassessing underperformers.</li>
                            <li><strong>Office Supplies</strong>: Continue leveraging the category's steady profitability.</li>
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
                

            </div>
        </div>
    );
};


export default SuperStoreSales;

