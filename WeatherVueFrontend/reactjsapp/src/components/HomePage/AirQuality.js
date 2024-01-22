import React,{useState, useEffect} from 'react';



const AirQuality = () =>
{

    const[lat,setLat] = useState('');
    const[lon, setLon] = useState('');

    useEffect(()=>{
    const fetchAirQualityData = async() =>
    {
        const latitude = localStorage.getItem('lat',lat);
        const longitude = localStorage.getItem('lon',lon);
        const nawLatitude =  Math.round(latitude * 1000) / 1000;
        const newLongitude =  Math.round(longitude * 1000) / 1000;
        //${nawLatitude}/${newLongitude}
        const apiUrl = `https://localhost:7194/api/AirQuality/${nawLatitude}/${newLongitude}`;
          

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

    fetchAirQualityData();
},[])
};

export default AirQuality;
