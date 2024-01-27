import React,{useState, useEffect} from 'react';
import {IconContext} from "react-icons";
import Header from './SideDashBoard';
import CurrentWeather from './CurrentWeather';
import ThreeHourForecast from './ThreeHourForecast';
import SideDashBoard from './SideDashBoard';
import iconW from './Images/letterWW.png';
import "./Weather.css";
import Loader from './Loader';
import SearchBar from './SearchBar';
import AirQuality from './AirQuality';

const Weather = () =>
{
    const[loader, setLoader]= useState(true);
    
    // const [isSidebarOpen, setSidebarOpen] = useState(false);


    // const userName = localStorage.getItem('userName');
    // const handleUserNameClick = () =>
    //     {
    //         setSidebarOpen(true);
    //      }

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


    useEffect(()=>
    {
      const handleGoingBack = (event)=>
      {
        window.history.forward();
    //    event.preventDefault();
    //    const message = "You are not allowed to go back" ;
    //    event.returnValue= message;
    //    return message;
      };

      window.addEventListener('popstate', handleGoingBack);

     return () =>
      {
        window.removeEventListener('popstate', handleGoingBack);
      };


    },[]);


    return (
        <section>
          
            <div className={"pageWrap"}>
            <div className="mainPage">
                
<div className="upperNavigation">
        {/* <div className={`userIcon ${isSidebarOpen ? 'open' : ''}`} onClick={handleUserNameClick}>
        <img src={iconW}  alt="" height='30px' id='iconW'/>
        {isSidebarOpen &&
       (<SideDashBoard isOpen={isSidebarOpen}/>) }
        </div>
        <div className={`userNameLocal `} >
        { userName} 
      
        
        </div> */}
            <div><SearchBar/></div>
            
        </div>
                 {loader ?
                 
            (<div className="loading"><Loader/></div>):(
               <div> <div className="weatherToday">
                   
                     <div className="currentWeatherData">
                    <CurrentWeather/></div>
                </div>
            <div className='fiveDayForecast'>
                    <ThreeHourForecast/>
                </div>
                <div className="airPollutionIndex">
                    <AirQuality/>
                </div>
                </div>
               
            )}
             </div>
            </div>
        </section>
    );
};

export default Weather;