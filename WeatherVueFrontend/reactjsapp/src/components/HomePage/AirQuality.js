import React,{useState, useEffect} from 'react';
import './AirQuality.css';
import AirPollutionIcon from './Images/AirPollutionIcon.png';


const AirQuality = () =>
{

    const[lat,setLat] = useState('');
    const[lon, setLon] = useState('');
    const[aqi , setAqi] = useState('');
    const[carbonMonoOxide, setcarbonMonoOxide] = useState('');
    const[pm, setPM] = useState('');
    const[nitrogenDiOxide, setNitrogenDiOxide] = useState('');
    const[ozone, setOzone]= useState('');
    const [sulphurDiOxide, setSulphurDiOxide] = useState('');
    const[ammonia, setAmmonia] = useState('');



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
                setAqi(data.list[0].main?.aqi);
                console.log(data.list[0].main?.aqi);

                setcarbonMonoOxide(data.list[0].components.co);
                //setNitricOxide(data.list[0].components.no);
                setPM(data.list[0].components.pm10);
                console.log(data.list[0].components.no);
                setNitrogenDiOxide(data.list[0].components.no2);
                setOzone(data.list[0].components.o3);
                console.log(data.list[0].components.o3);
                setSulphurDiOxide(data.list[0].components.so2);
                setAmmonia(data.list[0].components.nh3);


            
    };

    fetchAirQualityData();
},[]);


return (
    <section>
    <div className="airQuality">
        <div className="airComponents">
        <div className="airQualityHeader">
            <div className="airQualityAqi">
                
                {aqi &&
                aqi > 4&&
                ( <div className="airQualityMessage">
                    <div className="pollutionText">Air Quality :</div> Very Poor</div>)
                }
                {aqi &&
                aqi > 3&& aqi <=4 &&
                ( <div className="airQualityMessage">
                    <div className="pollutionText">Air Quality :</div> Poor</div>)}
                 {aqi &&
                aqi > 2&& aqi <=3 &&
                ( <div className="airQualityMessage">
                    <div className="pollutionText">Air Quality :</div> Moderate </div>)}
                 {aqi &&
                aqi > 1&& aqi <=2 &&
                ( <div className="airQualityMessage">
                    <div className="pollutionText">Air Quality :</div> Fair </div>)}
                 {aqi &&
                aqi > 0&& aqi <=1 &&
                ( <div className="airQualityMessage">
                    <div className="pollutionText">Air Quality :</div> Good</div>)}
                    {aqi && 
                (<div className="airQualityIndex">
                 <div className="pollutionText"> Air Quality Index :</div>  {aqi}
                </div>)}
                
           <div className="airPollutionConc">
             <div className="pollutionText"> Pollutant concentration in μg/m3 :</div></div>
             </div>
             <div className="pollutionIcon">
             <img src={AirPollutionIcon}  alt="" height='150px' id='airPollutionIcon'/>
             </div> </div>

             
                <div className="airPageWrap"> 
                <div className="firstPart">
                      {carbonMonoOxide && 
                    (<div className="carbonMonoOxide">
                        <div className="pollutionText">CO :</div>
                        {carbonMonoOxide}
                    </div>)} 

                    {pm && 
                    (<div className="nitricOxide">
                        <div className="pollutionText">PM10 :</div> {pm}
                    </div>)

                    }

                     {/* {nitricOxide && 
                    (<div className="nitricOxide">
                        {nitricOxide}
                    </div>)}  */}
        {nitrogenDiOxide && 
        (<div className="nitrogenDiOxide">
           <div className="pollutionText"> NO2 : </div> {nitrogenDiOxide}
        </div>)}
        </div>
        <div className="secondPart">
        {ozone && 
        (<div className="ozone">
            <div className="pollutionText">O3 :</div> {ozone}
        </div>)}
            {sulphurDiOxide &&
            (<div className="sulphurDiOxide">
                <div className="pollutionText"> SO2 :</div> {sulphurDiOxide}
            </div>)}

            {ammonia &&
            (<div className="ammonia">
              <div className="pollutionText"> NH3 :</div> {ammonia}
            </div>)}
            </div>
        </div>
    </div></div>
    </section>
);
};

export default AirQuality;
