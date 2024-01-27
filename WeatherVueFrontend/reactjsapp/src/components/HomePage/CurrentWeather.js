import React,{useState,useEffect} from 'react';
import Sun1 from './Images/Sun1.png';
import cloud from'./Images/cloud.png';
import pressureIcon from './Images/pressure.png';
import humidityIcon from './Images/humidity.png';
import contrast from './Images/contrast.png';
import windIcon from './Images/wind.png';
import windSpeedIcon from './Images/cardinalPoints.png';
import fogIcon from './Images/fog.png';
import SearchBar  from './SearchBar';
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
    const[sky, setSky] = useState('');
    const [visibility, setVisibility] = useState('');
    const[windDirection, setWindDirection] = useState('');
    const[temperatureMax, setTemperatureMax] = useState('');
    const[temperatureMin,setTemperatureMin] = useState('');

    const storedCityName = localStorage.getItem('cityName');
    const directions = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];
    const degreeRanges = [22.5, 67.5, 112.5, 157.5, 202.5, 247.5, 292.5, 337.5];


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
                const timeZone =(data.timezone) - 20700;
                const adjustedTimeZone = new Date(timeZone * 1000);

                console.log( adjustedTimeZone );
                // to change date time to 12 hour format
                // const timestamp = data.dt * 1000;
                // const date = new Date(timestamp);
                //const timeZone = data.sys?.country;
                const date = new Date(((data.dt) * 1000));
                const adjustedDate = new Date(date.getTime() + timeZone);
               // const finalDate = new Date(adjustedTimeZone + adjustedDate);
               // console.log(finalDate);
                const formattedDate = adjustedDate.toLocaleDateString('en-US',
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
                // setSky(data.weather.description);
                // console.log(data.weather?.description);
                setWind(data.wind?.speed);
                setVisibility((data.visibility)/1000);
                setWindDirection(data.wind.deg);
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
                    
                            {temperature < 15 ?(
                        <div className="weatherIcon">
                            <img src={cloud}  alt="" height='140px' id='cloud'/>
                           
                        </div>):
                        (<div className="weatherIcon">
                        <img src={Sun1}  alt="" height='140px' id='sun1'/>
                       
                    </div>)}
                                
                    </div>
                    {/* {sky&&
                                (<div className="skyCondition">{sky}</div>)} */}
                        {temperature &&
                            (
                        <div className="temperature" > {temperature} °C
                </div> )}</div>
            <div className="otherComponents">
                <div className="otherFirstRow">
                        {pressure && (
                    <div className="pressure">
                         Pressure
                        <div className="pressureIcon">
                            <img src={pressureIcon}  alt="" height='40px' id='pressureIcon'/>
                           
                        </div>
                        {pressure} hPa
                    </div>)}
                    {humidity && (
                    <div className="humidity">
                        Humidity
                        <div className="humidityIcon">
                            <img src={humidityIcon}  alt="" height='40px' id='humid'/>
                           
                        </div>
                        {humidity} %
                    </div>)}
                    {sunrise &&
                    (
                        <div className="sunrise">Sunrise<br/>
                        <div className="humidityIcon">
                    <img src={contrast}  alt="" height='30px' id='contrast'/> 
                    </div> 
                        {sunrise}</div>
                    )}
                </div>
                
                <div className="otherSecondRow">
                    <br/>
                    {wind&&
                    (
                        <div className="wind">
                            Wind Speed
                            <div className="windIcon">
                    <img src={windIcon}  alt="" height='30px' id='windIcon'/> 
                    </div> {wind} m/s</div>
                    )}
                    {windDirection&&
                    (
                        <div className="windDirection">
                            Wind Speed
                            <div className="windDirectionIcon">
                    <img src={windSpeedIcon}  alt="" height='30px' id='windSpeedIcon'/> 
                    </div> {windDirection} °</div>
                    )}
                    {visibility&&
                    (
                        <div className="visibility">
                           Visibility
                            <div className="fogIcon">
                    <img src={fogIcon}  alt="" height='30px' id='fogIcon'/> 
                    </div> {visibility} KM</div>
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
