//  https://api.openweathermap.org/data/2.5/weather?q=palanpur&appid=62c0f20f1c547e026c6dd50c2b3ca7ee

import React,{useState,useEffect} from 'react';
import Weathercard from "./Weathercard";
import "./style.css"



const Temperature = () => {
  
    //when changing the value of city name
    const [searchValue , setSearchValue] = useState("Palanpur");
    const [tempInfo, setTempInfo] = useState("");

    const getWeatherInfo = async () => {
        try {
           let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=62c0f20f1c547e026c6dd50c2b3ca7ee`;
    
          let res = await fetch(url);
          let data = await res.json();
    
          const { temp, humidity, pressure } = data.main;
          const { main: weathermood } = data.weather[0];
          const { name } = data;
          const { speed } = data.wind;
          const { country, sunset } = data.sys;
    
          //object for taking weather info
          const myNewWeatherInfo = {
            temp,
            humidity,
            pressure,
            weathermood,
            name,
            speed,
            country,
            sunset,
          };
    
          setTempInfo(myNewWeatherInfo);  
        } 
        
        catch (error) {
          console.log(error);
        }
      };
    
      useEffect(() => {
        getWeatherInfo();
      }, []);
    

    return (
    <>
     <div className="wrap">
         <div className="search">
             {/* search box */}
               <input type="search"
                    placeholder="search..."
                    autoFocus
                    id="search"
                    className="searchTerm"  
                    // taking search value and showing 
                    value={searchValue}
                    onChange = {(e) =>  setSearchValue(e.target.value)}
               />
               {/* search button */}
               <button className='searchButton' type='button' onClick={getWeatherInfo}>
                   Search
               </button>
         </div> 
    </div>

    {/* our temperature card */}
    <Weathercard tempInfo = {tempInfo} />
  </> 
  );
};

export default Temperature;
