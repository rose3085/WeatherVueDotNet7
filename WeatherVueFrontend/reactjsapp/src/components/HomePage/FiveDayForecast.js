import React,{useEffect,useState} from 'react';
import contrast from './Images/contrast.png';
import cloud from'./Images/cloud.png';
import "./FiveDayForecast.css";

const FiveDayForecast = () =>
{
    const [city, setCity] = useState([]);
    const[date, setDate] = useState('');
    const[temperature, setTemperature] = useState('');

    useEffect(()=>
    {
        const fetchFiveDayWeatherFromBackend =async(event) =>
        {
            const cityName = localStorage.getItem('cityName',city);
            const apiUrl = `https://localhost:7194/api/FiveDayForecast/${cityName}`;
            
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
                   
                    const date = new Date((data.list[0].dt) * 1000);
                    const formattedDate = date.toLocaleString('en-US',
                    {
                        hour: 'numeric',
                        minute: 'numeric',
                        hour12:true,
                    }
                    );
                    setDate(formattedDate);
                    console.log(formattedDate);

                    const temp =((data.list[0].main?.temp - 273.15) );
                if((temp % 1) >=0.5)
                {
                    const temperature = Math.ceil(temp);
                    setTemperature(temperature);
                }
                else{
                    const temperature = Math.floor(temp);
                    setTemperature(temperature);
                }
           

            

        };
        fetchFiveDayWeatherFromBackend();
    },[]);

    return( 
    <section>
        <div className="title"><p>Today's Weather :</p></div>
        <div className="fiveDay">
          
            <div className="firstComponent">
            {date && temperature &&(
               <> {date}
               {temperature <= 15 ?
                (<div className="weatherIcon">
                <img src={cloud}  alt="" height='30px' id='clouds'/> 
                </div>):
                (
                    <div className="weatherIcon">
                    <img src={contrast}  alt="" height='30px' id='contrast'/> 
                    </div> 
                )}
                {temperature} °C </> )
            
            }</div>
            
            <div className="secondComponent">
            {date && temperature &&(
               <> {date}
                <div className="weatherIcon">
                <img src={cloud}  alt="" height='30px' id='clouds'/>
                </div>
                {temperature} °C </> )
            
            }</div>
            <div className="thirdComponent">
            {date && temperature &&(
               <> {date}
                <div className="weatherIcon">
                <img src={cloud}  alt="" height='30px' id='clouds'/>
                </div>
                {temperature} °C </> )
            
            }</div>
            <div className="fourthComponent">
            {date && temperature &&(
               <> {date}
                <div className="weatherIcon">
                <img src={cloud}  alt="" height='30px' id='clouds'/>
                </div>
                {temperature} °C </> )
            
            }</div>
            <div className="fifthComponent">
            {date && temperature &&(
               <> {date}
                <div className="weatherIcon">
                <img src={cloud}  alt="" height='30px' id='clouds'/>
                </div>
                {temperature} °C </> )
            
            }</div>
            <div className="fifthComponent">
            {date && temperature &&(
               <> {date}
                <div className="weatherIcon">
                <img src={cloud}  alt="" height='30px' id='clouds'/>
                </div>
                {temperature} °C </> )
            
            }</div>
            <div className="fifthComponent">
            {date && temperature &&(
               <> {date}
                <div className="weatherIcon">
                <img src={cloud}  alt="" height='30px' id='clouds'/>
                </div>
                {temperature} °C </> )
            
            }</div>
            <div className="fifthComponent">
            {date && temperature &&(
               <> {date}
                <div className="weatherIcon">
                <img src={cloud}  alt="" height='30px' id='clouds'/>
                </div>
                {temperature} °C </> )
            
            }</div>
            
            
        </div></section>
    );

};

export default FiveDayForecast;