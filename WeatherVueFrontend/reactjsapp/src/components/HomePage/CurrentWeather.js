import React,{useState,useEffect} from 'react';
import Sun1 from './Images/Sun1.png';
import cloud from'./Images/cloud.png';
import './CurrentWeather.css';

const CurrentWeather = () =>
{
    const[city, setCity] = useState(null);
    const[temperature, setTemperature] = useState('');
    const[country, setCountry] = useState('');
    const[pressure, setPressure] = useState('');
    const[humidity, setHumidity] = useState('');
    const[icon, setIcon] = useState('');
    const[date, setDate] = useState('');
    const[sunrise, setSunrise]=useState('');
    const [wind, setWind] = useState('');
    const[temperatureMax, setTemperatureMax] = useState('');
    const[temperatureMin,setTemperatureMin] = useState('');

    const storedCityName = localStorage.getItem('cityName');


    useEffect (()=>
        {
  
    const fetchWeatherFromBackend = async(e) =>
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
                // to change date time to 12 hour format
                const date = new Date((data.dt) * 1000);
                const formattedDate = date.toLocaleString('en-US',
                    {
                        hour: 'numeric',
                        minute: 'numeric',
                        day:'numeric',
                        year:'numeric',
                        month:'numeric',
                        hour12:true,
                    }
                );

                console.log(data.main?.temp);
                const temp =((data.main?.temp - 273.15) );
                if((temp % 1) >=0.5)
                {
                    const temperature = Math.ceil(temp);
                    setTemperature(temperature);
                }
                else{
                    const temperature = Math.floor(temp);
                    setTemperature(temperature);
                }

                const sunrise= new Date((data.sys?.sunrise)* 1000);
                const formattedSunrise = sunrise.toLocaleString('en-US',
                    {
                        hour: 'numeric',
                        minute: 'numeric',
                        
                        hour12:true,
                    }
                );

                setSunrise( formattedSunrise);
                  
                setPressure(data.main?.pressure); 
                setHumidity(data.main?.humidity); 
                setDate(formattedDate);
                console.log(formattedDate);
                setIcon(data.weather.icon);
                setWind(data.wind?.speed);
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
            <div className="mainWeather"> 
            <div className="iconAndCountry">
                        {city && country && date&&
                        (<><div className="city"> 
                    {city}  {country}
                        </div>
                        <div className="dateTime">{date}
                            </div></>)}
                    
                            {temperature > 15 ?(
                        <div className="weatherIcon">
                            <img src={cloud}  alt="" height='140px' id='cloud'/>
                           
                        </div>):
                        (<div className="weatherIcon">
                        <img src={Sun1}  alt="" height='140px' id='sun1'/>
                       
                    </div>)}</div>
                        {temperature &&
                            (
                        <div className="temperature" > {temperature} °C
                </div> )}</div>
            <div className="otherComponents">
                <div className="otherFirstRow">
                        {pressure && (
                    <div className="pressure">
                        Pressure :<br/>
                        {pressure} hPa
                    </div>)}
                    {humidity && (
                    <div className="humidity">
                        Humidity:<br/>
                        {humidity} %
                    </div>)}
                    {sunrise &&
                    (
                        <div className="sunrise">Sunrise:<br/>
                        {sunrise}</div>
                    )}
                </div>
                <div className="otherSecondRow">
                    {wind&&
                    (
                        <div className="wind">Wind:<br/>{wind}</div>
                    )}
                </div>
            </div>
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
