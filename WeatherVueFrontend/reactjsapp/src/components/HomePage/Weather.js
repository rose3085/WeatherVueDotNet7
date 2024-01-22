import React,{useState, useEffect} from 'react';
import {IconContext} from "react-icons";
import Header from './Header';
import CurrentWeather from './CurrentWeather';
import ThreeHourForecast from './ThreeHourForecast';
import "./Weather.css";
import Loader from './Loader';

const Weather = () =>
{
    const[loader, setLoader]= useState(true);

    useEffect(()=>
    {
        const timeoutId = setTimeout(() => {
            setLoader(true);
          
        }, 3000);
    
        
        return () => clearTimeout(timeoutId);
        
    },[]);
    useEffect(()=>
    {
        const timeoutId = setTimeout(() => {
            setLoader(false);
          
        }, 3000);
    
        
        return () => clearTimeout(timeoutId);
        
    },[]);

    return (
        <section>
          
            <div className={"pageWrap"}>
            <div className="mainPage">
              
                 <Header/> 
                 {loader ?
                 
            (<div className="loading"><Loader/></div>):(
               <div> <div className="weatherToday">
                   
                     <div className="currentWeatherData">
                    <CurrentWeather/></div>
                </div>
            <div className='fiveDayForecast'>
                    <ThreeHourForecast/>
                </div></div>
               
            )}
             </div>
            </div>
        </section>
    );
};

export default Weather;