import React,{useState,useEffect} from 'react';
const CurrentWeather = () =>
{
const[city, setCity] = useState(null);


const fetchWeatherFromBackend = async() =>
{



const cityName = localStorage.getItem('cityName',city);
    const apiUrl = `https://localhost:7194/api/Forecast/${cityName}`;
    await fetch(apiUrl,
        {
            method: 'GET',
            headers:
            {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify()
        })
        .then(async response=>
            {
                if(response.ok)
                {
                    console.log(response);
                }
            })
        .then(data => {
            console.log(data);
            
    
        })
        .catch(error => {
            console.error(error);
        });
        
        };
return (
    <>
    <button onClick={fetchWeatherFromBackend}>Weather</button>
    </>
);

    }
export default CurrentWeather;
