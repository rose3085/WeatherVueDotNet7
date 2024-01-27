import React,{useState, useEffect} from 'react';

 const Location=() =>
 {

    const [location, setLocation] = useState(null);
    const [city, setCity] = useState(null);
    



 
  
    // const getLocation = async() =>
    // {

    useEffect(()=>
        {
            // debugger;
       
        // to check my current location and save to local storage
        if(navigator.geolocation)
        {
            navigator.geolocation.getCurrentPosition(
                 async (position) =>
                { 
                    const {latitude, longitude} = position.coords;
                    setLocation({latitude, longitude});
                    localStorage.setItem('lat',latitude);
                    localStorage.setItem('lon',longitude);
                     const apiKey = 'c7fee8cbe30d48d6be46999f591373c3';
                    //const apiUrl = `https://geocode.maps.co/reverse?lat=${latitude}&lon=${longitude}&api_key=${apiKey}}`;
                    const apiUrl = `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${apiKey}`;
                    await fetch(apiUrl)
                        .then(response => 
                            
                            {
                                if(response.ok){
                                return response.json();
                            }})
                        .then(data => {
                            if (data.results.length > 0) {
                                const city = data.results[0].components.city;
                                console.log('City:', city);
                                setCity({city});
                                
                                localStorage.setItem('cityName', city);
                                console.log();
                                // sendLocationToServer(city);
                            } else {
                                console.error('City not found');
                            }
                        })
                        .catch(error => {
                            console.error('Error getting city:', error.message);
                        });
                  
                },
                (error)=>
                {
                    console.error('Error getting location:', error.message);
                }
            );
        }
        else{
            console.log('Geolocation is not supported by this browser.');
        }
   
},[]);

useEffect(()=>
{
    const cityName = localStorage.getItem('cityName',city);
    if(cityName === undefined)
        {
            window.location.reload();
        }
},[]);

    // const sendLocationToServer = async() =>
    // {
    
    //     const apiUrl = `https://localhost:7194/api/Location`;

    //     await fetch(apiUrl, {
    //         method: 'POST',
    //         headers: {
    //           'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify({city}),
    //       })
    //         .then(response => response.json())
    //         .then(data => {
    //           console.log('Location sent successfully:', data);
    //         })
    //         .catch(error => {
    //           console.error('Error sending location to server:', error);
    //         });
    // };



    return(
        <>
        {/* <button onClick={getLocation}> Hi
        {location && city &&
        (
            <p>Your current location: {city.city}</p>
        )

        }</button> */}


        {/* <button onClick={sendLocationToServer}>
                Heloooooo
        </button> */}
        </>
    );
 };
export default Location;