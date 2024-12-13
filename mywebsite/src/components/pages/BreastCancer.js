import React from 'react';

const BreastCancer = () => {

    

    return (
        <div className='project'>
            <div className='container'>
                <h1>Breast Cancer Detection Report</h1>

                <h3>Executive Summary</h3>

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

                <div className="jupyter-embed">
                <iframe 
                    src="https://colab.research.google.com/drive/your_notebook_id?usp=sharing" 
                    width="100%" 
                    height="800" 
                    title="Interactive Breast Cancer Data Analysis Notebook">
                </iframe>
                </div>
                

            </div>
        </div>
    );
};


export default BreastCancer;

