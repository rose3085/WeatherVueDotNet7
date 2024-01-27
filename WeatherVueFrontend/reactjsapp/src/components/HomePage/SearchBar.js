import React, {useState, useEffect} from 'react';
import './SearchBar.css';
import Search from './Images/Search.png';
import iconW from './Images/letterWW.png';
import AppLogo from './Images/AppLogo.png';
import CurrentWeather from './CurrentWeather';
import {useNavigate} from 'react-router-dom';
import SideDashBoard from './SideDashBoard';

const SearchBar = () =>
{
   
    const [searchCity, setSearchCity] =useState('');
    const [city , setCity] = useState('');
    const[cityName, setCityName]= useState('');
    const[submitClicked, setSubmitClicked]= useState('');
    const[searchData, setSearchData] = useState('');

    const navigate = useNavigate();


    const [isSidebarOpen, setSidebarOpen] = useState(false);


    const userName = localStorage.getItem('userName');
    let clickCount = 0;
    const handleUserNameClick = () =>
        {
            clickCount++;
           // console.log(clickCount);
            {(clickCount % 2 !==0)? 
                (setSidebarOpen(true))
                : 
                (setSidebarOpen(false))
            }
            
            
         }

    const handleInputChange = (e) =>
    {
        // setSearchCity(e.target.value);
      setCity(e.target.value);
     

    }
   


    
  
    //const userName = localStorage.getItem('userName');
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
                const storedCityName = localStorage.getItem('cityName');
                const newCityName = `${data.name}`;
                const newLatitude = Math.round((data.coord?.lat) * 1000)/1000;
                const newLongitude = Math.round((data.coord?.lon) * 1000)/1000;
                //const updatedCityName = storedCityName.replace('Butwal', newCityName);
                const updatedCityName = storedCityName ? storedCityName.replace('Butwal', newCityName) : storedCityName;

                localStorage.setItem('cityName', newCityName);
                localStorage.setItem('lat', newLatitude);
                localStorage.setItem('lon', newLongitude);
                
                setSearchData(data);
                setCity(data.name);
                window.location.reload();
                 
                 
            
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
     </div>
     </div>
       {/* <div className="appLogo">
     <img src={AppLogo}  alt="" height='40px' id='appLogo'/>
     </div> */}
     <div className={`userNameLocal  ${isSidebarOpen ? 'open' : ''}`} onClick={handleUserNameClick} >
       <div className="user">{ userName} </div> 
        {isSidebarOpen &&
       (<SideDashBoard isOpen={isSidebarOpen}/>) }
       </div>
     <div className={`userIcon `}>
        <div className="iconLogo"><img src={iconW}  alt="" height='30px' id='iconW'/></div>
        
        </div>
        

    </div>);
};

export default SearchBar;
