import React from 'react';
import {IconContext} from "react-icons";
import Header from './Header';
import CurrentWeather from './CurrentWeather';
import FiveDayForecast from './FiveDayForecast';

const Weather = () =>
{

    return (
        <section>
            <div className={"pageWrap"}>
            <Header/>
            <div className="currentWeatherData">
                <CurrentWeather/></div>
            <FiveDayForecast/>
            </div>
        </section>
    );
};

export default Weather;