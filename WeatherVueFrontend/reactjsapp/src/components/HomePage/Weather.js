import React from 'react';
import {IconContext} from "react-icons";
import Header from './Header';
import CurrentWeather from './CurrentWeather';
import FiveDayForecast from './FiveDayForecast';
import "./Weather.css";

const Weather = () =>
{

    return (
        <section>
            <div className={"pageWrap"}>
            <div className="mainPage">
                <div className="weatherToday">
                    <Header/>
                     <div className="currentWeatherData">
                    <CurrentWeather/></div>
                </div>
            </div><div className='fiveDayForecast'>
                    <FiveDayForecast/>
                </div>
            </div>
        </section>
    );
};

export default Weather;