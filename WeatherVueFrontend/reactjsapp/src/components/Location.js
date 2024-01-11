import React,{useState, useEffect} from 'react';

 const Location=() =>
 {

    const [location, setLocation] = useState(null);
    
    const getLocation = () =>
    {
        if(navigator.geolocation)
        {
            navigator.geolocation.getCurrentPosition(
                (position) =>
                {
                    const {latitude, longitude} = position.coords;
                    setLocation({latitude, longitude});
                    //https://geocode.maps.co/reverse?lat=latitude&lon=longitude&api_key=65a03f98cf3dc359812428hsl06bd35
                    // sendLocationToServer(latitude, longitude);
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
    };
 

    // const sendLocationToServer =(latitude, longitude) =>
    // {

    //     fetch('/api/user/location', {
    //         method: 'POST',
    //         headers: {
    //           'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify({ latitude, longitude }),
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
        <button onClick={getLocation}> Hi
        {location &&
        (
            <p>Your current location: {location.latitude}, {location.longitude}</p>
        )

        }</button>
        </>
    );
 };
export default Location;