import React, {useEffect, useState} from 'react';

const WeatherMap = () =>
{
    const[image, setImage] = useState([]);
    const [layer, setLayer] = useState("");
    const [x, setX] = useState("");
    const [y, setY] = useState("");
    const [z, setZ] = useState("");
    const displayMap =(value) =>
    {
        handleMapRequest(value);
    }


    const handleMapRequest =async(event) =>
    {
        
        const apiUrl = `https://localhost:7194/api/Forecast/weatherMap?layer=clouds_new&x=1&y=1&z=1`;
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
                        const blob = await response.blob();
                        const imageUrl = URL.createObjectURL(blob);
                        setImage(imageUrl);
                        console.log(blob);
                    }
                })
                .then(data => {
                    console.log(data);
                   
            
                })
                .catch(error => {
                    console.error(error);
                });
    };
   
return(
    <section>
        <div className="weatherMap" >
            
            {image && 
            (
                <div onClick={displayMap}>
                <img src={image} alt="Weather Map"/></div>
            )}
        </div>
    </section>
);
}
export default WeatherMap;

