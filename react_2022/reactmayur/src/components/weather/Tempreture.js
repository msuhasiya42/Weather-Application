//  api.openweathermap.org/data/2.5/weather?q={city name}&appid=62c0f20f1c547e026c6dd50c2b3ca7ee

import React from 'react';
import "./style.css"


const Tempreture = () => {
  return (
    <>
     <div className="wrap">
         <div className="search">
               <input type="search"
                    placeholder="search..."
                    autoFocus
                    id="search"
                    className="searchTerm"   
               />

               <button className='searchButton'>
                   Search
               </button>
         </div> 
    </div>

    {/* our tempreture card */}
    <article className='widget'>
        
    </article>
  </> 
  );
};

export default Tempreture;
