import React, {useState, useEffect} from 'react';
import './SearchBar.css';
import Search from './Images/Search.png';
import CurrentWeather from './CurrentWeather';
const SearchBar = () =>
{
   
    const [searchCity, setSearchCity] =useState('');
    const [city , setCity] = useState('');
    const[cityName, setCityName]= useState('');
    const[submitClicked, setSubmitClicked]= useState(true);

    const handleInputChange = (e) =>
    {
        // setSearchCity(e.target.value);
      setCity(e.target.value);
     

    }
  
        
    const handleCitySearch = async (e) =>
    { 
       
       
        //const initialData = JSON.parse(cityName) || { propertyToUpdate: 'initial value' };
        
        const apiUrl = `https://localhost:7194/api/Forecast/${city}`;
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
                setCity(data.name);
                 const name = data.name;
                 

        // await fetch(apiUrl,
        //     {
        //         method: 'GET',
        //         headers:
        //         {
        //             'Content-Type': 'application/json',
        //         },
        //         body: JSON.stringify()
        //     })
        //     .then(async response=>
        //         {
        //             if(response.ok)
        //             {
        //                 console.log(response);
                        
        //             }
        //         })
        //     .then(data => {
        //         console.log(data);
        //         const name = data.name;
        //         localStorage.setItem('city', name);        
        
        //     })
        //     .catch(error => {
        //         console.error(error);
        //     });
            
            };
        
    

    return (
    <div className={"search"}>
        <div className={"searchBarWrap"}>
        <div className={"searchBar"}>
            <input className={"searchInput"}
                type="text" placeholder={"SearchCity"} 
                value = {city} onChange={handleInputChange}
            
            /> 
            <button className={"searchButton"} onClick={handleCitySearch}><img src={Search} alt="" id='search'/>
            </button>
     </div></div>
   

    </div>);
};

export default SearchBar;
