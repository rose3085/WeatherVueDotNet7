import React,{useState,useEffect, useLayoutEffect} from 'react';
import Sun1 from './Images/Sun1.png';


const CurrentWeather = () =>
{
    const[city, setCity] = useState(null);
    const[temperature, setTemperature] = useState('');
    const[country, setCountry] = useState('');
    const[pressure, setPressure] = useState('');
    const[humidity, setHumidity] = useState('');
    const[icon, setIcon] = useState('');

    const storedCityName = localStorage.getItem('cityName');


    useEffect (()=>
        {
  
    const fetchWeatherFromBackend = async() =>
    {
        const cityName = localStorage.getItem('cityName',city);
        const apiUrl = `https://localhost:7194/api/Forecast/${cityName}`;
          

            const response = await fetch(apiUrl,
            {
                method: 'GET',
                headers:
                {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify()
            });
            if (!response.ok) {
                    throw new Error('Failed to fetch weather data');
                }
            
                const data = await response.json();
            
                console.log(data);
                console.log(data.main?.temp);
                setTemperature(data.main?.temp);  // Set the temperature from the API response
                setPressure(data.main?.pressure); 
                setHumidity(data.main?.humidity); 

                setIcon(data.weather.icon);

                setCity(data.name);
                setCountry(data.sys?.country);
                console.log(data.sys?.country);
                
                // catch (error) {
                //   console.error(error);
                // };
                };
        fetchWeatherFromBackend();


        const handleGoingBack = (event)=>
          {
           event.preventDefault();
           const message = "You are not allowed to go back" ;
           event.returnValue= message;
           return message;
          };
    
                window.addEventListener('beforeunload', handleGoingBack);
    
                return () =>
                 {
                   window.removeEventListener('beforeunload', handleGoingBack);
                 };
            },[]);
    
     
  
        

return (
    <>
    {/* <button onClick={fetchWeatherFromBackend}>Weather</button> */}
    <section>
        
        <div className="weather">
            <div className="weatherIcon">
                <img src={Sun1}  alt="" height='200px' id='sun1'/>
                {icon}
            </div>
            {temperature &&
                (
            <div className="temperature" >
                Temperaute:{temperature} 
                </div> )}
            {city && country && 
            (<div className="city"> {city} {country}
            </div>)}
            {pressure && (
            <div className="pressure">
                Pressure :{pressure}
            </div>)}
            {humidity && (
            <div className="humidity">
                Humidity:{humidity}
            </div>)}
        
        </div>
        </section>
        {/* <div class="details">
            <div class="col">
                <img src="images/storm.png"/>
                <div>
                    <p class="storm"> 50%</p>
                    <p> storm</p>
                </div>
            </div>
        </div> */}

    </>
);

    }
export default CurrentWeather;
