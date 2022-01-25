import React, {useState, useEffect} from 'react';


const Weathercard = ({tempInfo}) => {
  const [weatherState, setWeatheState] = useState("");
  const{
  temp,
  humidity,
  pressure,
  weathermood,
  name, 
  speed,
  country,
  sunset,
} = tempInfo;

  useEffect(() => {
    if (weathermood) {
      switch (weathermood) {
        case "Clouds":
          setWeatheState("wi-day-cloudy");
          break;
        case "Haze":
          setWeatheState("wi-fog");
          break;
        case "Clear":
          setWeatheState("wi-day-sunny");
          break;
        case "Mist":
          setWeatheState("wi-dust");
          break;
        default:
          setWeatheState("wi-day-sunny");
          break;
      }
    }
  }, [weathermood]);

//   converting the seconds into time
  let sec = sunset;
  let date = new Date(sec * 1000);
  let timeStr = `${date.getHours()}:${date.getMinutes()}`;
  
  return (
    <>
      <article className='widget'>

{/* weather icon */}
{/* <div className='weatherIcon'>
    <i className = {'wi ${weathermood}'}></i>
</div> */}

{/* weather info */}
<div className='weatherInfo'>
    {/* Main temperature in celsius*/}
    <div className='temperature'>
        <span>{temp}&deg;</span>
    </div>

    {/* description */}
    <div className='description'>
        {/* weather condition */}
        <div className='weatherCondition'>
                {weathermood}
        </div>
        {/* name of city,country */}
        <div className='place'>
                {name} ,{country}
        </div>
    </div>
</div>

{/* for Date and time */}
<div className='date'>{new Date().toLocaleString()}</div>

{/* our four type of details */}
<div className='extra-temp'>
<div className='temp-info-minmax'>
    <div className='two-sided-section'>
        <p>
            <i className='wi wi-sunset'></i>
        </p>
        <p className='extra-info-leftside'>
             {timeStr} <br/>
             Sunset
        </p>
    </div>
    <div className='two-sided-section'>
        <p>
            <i className='wi wi-humidity'></i>
        </p>
        <p className='extra-info-leftside'>
             {humidity} <br/>
             Humidity
        </p>
    </div>
</div>
<div className='weather-extra-info'>
    <div className='two-sided-section'>
        <p>
            <i className='wi wi-rain'></i>
        </p>
        <p className='extra-info-leftside'>
             {pressure} <br/>
             Pressure
        </p>
    </div>
    <div className='two-sided-section'>
        <p>
            <i className='wi wi-strong-wind'></i>
        </p>
        <p className='extra-info-leftside'>
             {speed} <br/>
             Speed
        </p>
    </div>  
</div>
</div>
</article>
    </>
  );
};

export default Weathercard;