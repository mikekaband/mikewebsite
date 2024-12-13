import React from 'react';
import TableauEmbed from './TableauEmbed';
import { Link } from 'react-router-dom';
import logo from "../img/MikeMusasLogoMark Design_White.svg";

const TrafficFatalities = () => {

    const tableauUrl = "https://public.tableau.com/views/msba_project_dashboard/Demography";  // Replace with your Tableau embed URL
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
                <h1>Road Traffic Fatalities in the USA 2022</h1>

                <h3>Introduction</h3>

                <p>
                    Traffic mortality has been a public health issue in the United States, 
                    with thousands of individuals dying each year due to various factors 
                    contributing to road accidents. This project aims to identify the 
                    leading causes of traffic fatalities and recommend effective strategies 
                    to reduce the number of deaths on American roads.
                </p>
                <p>
                    The project will examine the leading contributors to traffic fatalities, 
                    including speeding, drunk driving, and distracted driving. Speeding 
                    remains one of the most significant factors, as higher speeds reduce the 
                    driver's ability to react to sudden changes and increase the severity of 
                    accidents. Drunk driving is another major cause, with impaired judgment 
                    and delayed reaction times leading to a higher likelihood of crashes. 
                    Distracted driving, often due to mobile phone use or other in-vehicle 
                    distractions, has also emerged as a critical concern in recent years.
                </p>

                <div className="tableau-embed">
                    <TableauEmbed url={tableauUrl} options={options} />
                </div>


                <h3>Key Findings</h3>

                <p>
                    Reducing traffic mortality in the USA requires a multifaceted approach that addresses 
                    the various contributing factors identified in this project. By enhancing law enforcement, 
                    improving road infrastructure, conducting public education campaigns, leveraging 
                    technological innovations, and utilizing data-driven policy making, we can make significant 
                    strides in decreasing the number of road traffic fatalities. The ultimate goal is to create 
                    safer roads for all users, thereby protecting lives and reducing the devastating impact of 
                    traffic accidents on families and communities. With coordinated efforts and sustained commitment, 
                    we can achieve a substantial and lasting reduction in traffic mortality.
                </p>

                <br />
                <br />

                <p><strong>Data Source:</strong> <a href='https://www.nhtsa.gov/file-downloads?p=nhtsa/downloads/FARS/' target="_blank" rel="noreferrer">nhtsa.org/</a></p>
                <p><strong>Project Report:</strong> <a href='https://github.com/musasmike/msba_capstone/tree/main' target="_blank" rel="noreferrer">GitHub Repository</a></p>

                <br />
                <br />
                <br />
                <br />
                <br />
                <br />


                {/* EXPLORE MORE PROJECTS */}
                <h2 className='explore-more'>Explore More Projects</h2>
                <section className='portfolio-cards'>

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

                <Link to="/bordercrossing" className='portfolio-card' id='border-crossing' onClick={handleScrollToTop}>
                    
                    <div className='gradient'></div>
                    <div className='descriptions'>
                        <div>
                        <h4>US Border Crossing</h4>
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


export default TrafficFatalities;

