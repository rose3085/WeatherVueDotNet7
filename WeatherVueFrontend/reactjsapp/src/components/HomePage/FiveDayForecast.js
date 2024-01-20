import React,{useEffect,useState} from 'react';


const FiveDayForecast = () =>
{
    const [city, setCity] = useState([]);

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

        };
        fetchFiveDayWeatherFromBackend();
    },[]);

};

export default FiveDayForecast;