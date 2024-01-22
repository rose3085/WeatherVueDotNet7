import React,{useEffect,useState} from 'react';
import contrast from './Images/contrast.png';
import cloud from'./Images/cloud.png';
import Sun1 from './Images/Sun1.png';
import "./ThreeHourForecast.css";


const ThreeHourForecast = () =>
{
    const [city, setCity] = useState([]);
    const[date, setDate] = useState('');
    const[temperature, setTemperature] = useState('');
    const[dateOne, setDateOne] = useState('');
    const[temperatureOne, setTemperatureOne] = useState('');
    const[dateTwo, setDateTwo] = useState('');
    const[temperatureTwo, setTemperatureTwo] = useState('');
    const[dateThree, setDateThree] = useState('');
    const[temperatureThree, setTemperatureThree] = useState('');
    const[dateFour, setDateFour] = useState('');
    const[temperatureFour, setTemperatureFour] = useState('');
    const[dateFive, setDateFive] = useState('');
    const[temperatureFive, setTemperatureFive] = useState('');
    const[dateSix, setDateSix] = useState('');
    const[temperatureSix, setTemperatureSix] = useState('');
    const[dateSeven, setDateSeven] = useState('');
    const[temperatureSeven, setTemperatureSeven] = useState('');
    const[lat,setLat] = useState('');
    const[lon, setLon] = useState('');

    useEffect(()=>
    {
        const fetchFiveDayWeatherFromBackend =async() =>
        {
           
            
            // const latitude = localStorage.getItem('lat',lat);
            // const longitude = localStorage.getItem('lon',lon);
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

                const dateOne = new Date((data.list[1].dt) * 1000);
                    const formattedDateOne = dateOne.toLocaleString('en-US',
                    {
                        hour: 'numeric',
                        minute: 'numeric',
                        hour12:true,
                    }
                    );
                    setDateOne(formattedDateOne);
                    

                const tempOne =((data.list[1].main?.temp - 273.15) );
                if((tempOne % 1) >=0.5)
                {
                    const temperatureOne = Math.ceil(tempOne);
                    setTemperatureOne(temperatureOne);
                }
                else{
                    const temperatureOne = Math.floor(tempOne);
                    setTemperatureOne(temperatureOne);
                }
               

                const dateTwo = new Date((data.list[2].dt) * 1000);
                const formattedDateTwo = dateTwo.toLocaleString('en-US',
                {
                    hour: 'numeric',
                    minute: 'numeric',
                    hour12:true,
                }
                );
                setDateTwo(formattedDateTwo);
                

            const tempTwo =((data.list[2].main?.temp - 273.15) );
            if((tempTwo % 1) >=0.5)
            {
                const temperatureTwo = Math.ceil(tempTwo);
                setTemperatureTwo(temperatureTwo);
            }
            else{
                const temperatureTwo = Math.floor(tempTwo);
                setTemperatureTwo(temperatureTwo);
            }


            const dateThree = new Date((data.list[3].dt) * 1000);
                const formattedDateThree = dateThree.toLocaleString('en-US',
                {
                    hour: 'numeric',
                    minute: 'numeric',
                    hour12:true,
                }
                );
                setDateThree(formattedDateThree);
                

            const tempThree =((data.list[3].main?.temp - 273.15) );
            if((tempThree % 1) >=0.5)
            {
                const temperatureThree = Math.ceil(tempThree);
                setTemperatureThree(temperatureThree);
            }
            else{
                const temperatureThree = Math.floor(tempThree);
                setTemperatureThree(temperatureThree);
            }
           

            const dateFour = new Date((data.list[4].dt) * 1000);
                const formattedDateFour = dateFour.toLocaleString('en-US',
                {
                    hour: 'numeric',
                    minute: 'numeric',
                    hour12:true,
                }
                );
                setDateFour(formattedDateFour);
                

            const tempFour=((data.list[4].main?.temp - 273.15) );
            if((tempFour % 1) >=0.5)
            {
                const temperatureFour = Math.ceil(tempFour);
                setTemperatureFour(temperatureFour);
            }
            else{
                const temperatureFour = Math.floor(tempFour);
                setTemperatureFour(temperatureFour);
            }
            
            const dateFive = new Date((data.list[5].dt) * 1000);
                const formattedDateFive = dateFive.toLocaleString('en-US',
                {
                    hour: 'numeric',
                    minute: 'numeric',
                    hour12:true,
                }
                );
                setDateFive(formattedDateFive);

            const tempFive=((data.list[5].main?.temp - 273.15) );
            if((tempFive % 1) >=0.5)
            {
                const temperatureFive = Math.ceil(tempFive);
                setTemperatureFive(temperatureFive);
            }
            else{
                const temperatureFive = Math.floor(tempFive);
                setTemperatureFive(temperatureFive);
            }


            const dateSix = new Date((data.list[6].dt) * 1000);
                const formattedDateSix  = dateSix.toLocaleString('en-US',
                {
                    hour: 'numeric',
                    minute: 'numeric',
                    hour12:true,
                }
                );
                setDateSix (formattedDateSix );

            const tempSix =((data.list[6].main?.temp - 273.15) );
            if((tempSix  % 1) >=0.5)
            {
                const temperatureSix  = Math.ceil(tempSix );
                setTemperatureSix (temperatureSix );
            }
            else{
                const temperatureSix  = Math.floor(tempSix );
                setTemperatureSix (temperatureSix );
            }
            
            const dateSeven = new Date((data.list[7].dt) * 1000);
                const formattedDateSeven  = dateSeven.toLocaleString('en-US',
                {
                    hour: 'numeric',
                    minute: 'numeric',
                    hour12:true,
                }
                );
                setDateSeven(formattedDateSeven);

            const tempSeven =((data.list[7].main?.temp - 273.15) );
            if((tempSeven  % 1) >=0.5)
            {
                const temperatureSeven = Math.ceil(tempSeven);
                setTemperatureSeven(temperatureSeven);
            }
            else{
                const temperatureSeven = Math.floor(tempSeven);
                setTemperatureSeven(temperatureSeven);
            }
          


        };
        fetchFiveDayWeatherFromBackend();
    },[]);

    return( 
    <section>
        <br/>
        <div className="title"><p>Three Hour Forecast :</p></div>
        <div className="fiveDay">
          
            <div className="firstComponent">
            {date && temperature  &&(
               <> 
               
               {date}
               {temperature <= 19 ?
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
            {dateOne && temperatureOne &&(
               <> {dateOne}
               {  temperatureOne <= 19 ?
               (<div className="weatherIcon">
                <img src={cloud}  alt="" height='30px' id='clouds'/>
                </div>):(<div className="weatherIcon">
                    <img src={contrast}  alt="" height='30px' id='contrast'/> 
                    </div>)}
                
                {temperatureOne} °C </> )
            
            }</div>
            <div className="thirdComponent">
            {dateTwo && temperatureTwo &&(
               <> {dateTwo}
               {  temperatureTwo <= 19 ?
               (<div className="weatherIcon">
                <img src={cloud}  alt="" height='30px' id='clouds'/>
                </div>):(<div className="weatherIcon">
                    <img src={contrast}  alt="" height='30px' id='contrast'/> 
                    </div>)}
                {temperatureTwo} °C </> )
            
            }</div>
            <div className="fourthComponent">
            {dateThree && temperatureThree &&(
               <> {dateThree}
                {  temperatureThree <= 19 ?
               (<div className="weatherIcon">
                <img src={cloud}  alt="" height='30px' id='clouds'/>
                </div>):(<div className="weatherIcon">
                    <img src={contrast}  alt="" height='30px' id='contrast'/> 
                    </div>)}
                {temperatureThree} °C </> )
            
            }</div>
            <div className="fifthComponent">
            {dateFour && temperatureFour &&(
               <> {dateFour}
               {  temperatureFour <= 19 ?
               (<div className="weatherIcon">
                <img src={cloud}  alt="" height='30px' id='clouds'/>
                </div>):(<div className="weatherIcon">
                    <img src={contrast}  alt="" height='30px' id='contrast'/> 
                    </div>)}

                {temperatureFour} °C </> )
            
            }</div>
            <div className="fifthComponent">
            {dateFive && temperatureFive &&(
               <> {dateFive}
                {  temperatureFive <= 19 ?
               (<div className="weatherIcon">
                <img src={cloud}  alt="" height='30px' id='clouds'/>
                </div>):(<div className="weatherIcon">
                    <img src={contrast}  alt="" height='30px' id='contrast'/> 
                    </div>)}
                {temperatureFive} °C </> )
            
            }</div>
            <div className="fifthComponent">
            {dateSix && temperatureSix &&(
               <> {dateSix}
                {  temperatureSix <= 19 ?
               (<div className="weatherIcon">
                <img src={cloud}  alt="" height='30px' id='clouds'/>
                </div>):(<div className="weatherIcon">
                    <img src={contrast}  alt="" height='30px' id='contrast'/> 
                    </div>)}
                {temperatureSix} °C </> )
            
            }</div>
            <div className="fifthComponent">
            {dateSeven && temperatureSeven &&(
               <> {dateSeven}
                {  temperatureSeven <= 19 ?
               (<div className="weatherIcon">
                <img src={cloud}  alt="" height='30px' id='clouds'/>
                </div>):(<div className="weatherIcon">
                    <img src={contrast}  alt="" height='30px' id='contrast'/> 
                    </div>)}
                {temperatureSeven} °C </> )
            
            }</div>
            
            
        </div></section>
    );

};

export default ThreeHourForecast;