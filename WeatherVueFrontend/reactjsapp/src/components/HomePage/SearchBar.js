import React, {useState, useEffect} from 'react';
import './SearchBar.css';
import Search from './Images/Search.png';

const SearchBar = () =>
{

    const [searchCity, setSearchCity] =useState('');
    const [cityName , setCityName] = useState('');

    const handleInputChange = (e) =>
    {
        // setSearchCity(e.target.value);
        setCityName(e.target.value);
    }

    const handleCitySearch = async () =>
    {
        
        const apiUrl = `https://localhost:7194/api/Forecast/${cityName}`;
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
                setCityName(data.name);
                // const name = data.name;
                // localStorage.setItem('cityName', name);  

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
                type="text" placeholder={"Search City"} 
                value = {cityName} onChange={handleInputChange}
            
            /> 
            <button className={"searchButton"} onClick={handleCitySearch}><img src={Search} alt="" id='search'/>
            </button>
     </div></div>
    </div>);
};

export default SearchBar;
