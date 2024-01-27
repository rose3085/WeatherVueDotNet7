import React, {useEffect, useState} from 'react';
import L from 'leaflet';
import {MapContainer, TileLayer, Marker, Popup} from 'react-leaflet';

const WeatherMap = () =>
{
    const[image, setImage] = useState([]);
    const [layer, setLayer] = useState(true);
    const[lat, setLat]= useState(true);
    const [lon, setLon] = useState(true);
    const[name, setName] = useState(true);
    const[coord, setCoord] = useState(true);
    // const [x, setX] = useState("");
    // const [y, setY] = useState("");
    // const [z, setZ] = useState("");
    let x=0;
    let y=0;
    let z = 1;

    const displayMap =(value) =>
    {
        handleMapRequest(value);
    }


    const handleMapRequest =async(event) =>
    {
        const containerDiv = document.createElement('div');
            containerDiv.id = 'mapContainer';
            containerDiv.style.height = '400px';
            containerDiv.style.width = '100%'; 
            containerDiv.style.overflow = 'auto';
            document.body.appendChild(containerDiv);

        const imageBounds = [[-90,-180],[90,180]];
        const idoWeather = "b81254f0e327b2707342b7d4fc3e7837";
        // const apiUrl = `https://localhost:7194/api/Forecast/weatherMap?layer=${layer}&x=${x}&y=${y}&z=${z}`;
        const apiUrl = `https://tile.openweathermap.org/map/${layer}/${z}/${x}/${y}.png?appid=${idoWeather}`;
      const map = L.map('mapContainer').setView([x,y], 2);


        map.on('zoomend', () => {
            
            const center = map.getCenter();

            
            x = center.lng;
            y = center.lat;

            console.log(`New Coordinates: x=${x}, y=${y}`);
        });
                    
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
                        L.imageOverlay(imageUrl, imageBounds).addTo(map);
                        map.fitBounds(imageBounds);

                        setImage(imageUrl);

                        console.log(blob);

                        // const imgElement = document.createElement('img');
                        // imgElement.src = imageUrl;

                        // const containerDiv = document.createElement('div');
                        // containerDiv.style.height = '400px';
                        // containerDiv.style.overflow='auto';

                        // containerDiv.appendChild(imgElement);

                        // const existingContainer = document.getElementById('imageContainer');
                        // if(existingContainer)
                        // {
                        //     existingContainer.replaceWith(containerDiv);
                        // }
                        // else
                        // {
                        //     document.body.appendChild(containerDiv);
                        // }
                    }
                })
                .then(data => {
                    debugger;
                    console.log(data);
                    <MapContainer
                    center={[data.coord?.lat || 0, data.coord?.lon || 0]}
                    zoom={10}
                    style={{ height: '400px' }}
                  >
                    <TileLayer
                      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    />
                    {data.coord && (
                      <Marker position={[data.coord.lat, data.coord.lon]}>
                        <Popup>{data.name}</Popup>
                      </Marker>
                    )}
                  </MapContainer>
            
                })
                .catch(error => {
                    console.error(error);
                });


                // const map = L.map().setView([0,0],2);
                //     L.tileLayer(apiUrl,
                //         {
                //             maxZoom:18
                //         }).addTo(map);

                // L.imageOverlay(apiUrl, imageBounds).addTo(map);
    };
   
// useEffect(()=>
// {
//     const map = L.map().setView([0,0],2);
//     L.tileLayer(tileLayerUrl,
//         {
//             maxZoom:18
//         }).addTo(map);
// },[]);

return(
    <section>
        <div className="weatherMap" >
            
            {image && 
            (
                <div >
                    <input
                    type="text" value={layer} placeholder='Enter layer'
                                    onChange={(e) =>
                                        setLayer(e.target.value)} />
                    {/* <input type="text" value={x} placeholder='Enter x'
                                    onChange={(e) =>
                                        setX(e.target.value)} />
                    <input type="text" value={y} placeholder='Enter y'
                                    onChange={(e) =>
                                        setY(e.target.value)} />
                    <input type="text" value={z} placeholder='Enter z'
                                    onChange={(e) =>
                                        setZ(e.target.value)} /> */}
                <button onClick={displayMap}>Display Map</button>
                {/* <img src={image} alt="Weather Map"/> */}
                </div>
            )}
        </div>
    </section>
    // <>
    
    // <MapContainer
    //   center={[data.coord?.lat || 0, data.coord?.lon || 0]}
    //   zoom={10}
    //   style={{ height: '400px' }}
    // >
    //   <TileLayer
    //     url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    //     attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    //   />
    //   {data.coord && (
    //     <Marker position={[data.coord.lat, data.coord.lon]}>
    //       <Popup>{data.name}</Popup>
    //     </Marker>
    //   )}
    // </MapContainer>

    // </>
);
}



// const handleMapRequest =async(event) =>
//      {
//         const apiUrl = `https://localhost:7194/api/Forecast/weatherMap?layer=${layer}&x=${x}&y=${y}&z=${z}`;
//         await fetch(apiUrl,
//                         {
//                             method: 'GET',
//                             headers:
//                             {
//                                 'Content-Type': 'application/json',
//                             },
//                             body: JSON.stringify()
//                         })
//                         .then(async response=>
//                             {
//                                 if(response.ok)
//                                 {
//                                     const blob = await response.blob();
//                                     const imageUrl = URL.createObjectURL(blob);
//                                     setImage(imageUrl);
//                                 }
//                             })
//                         .then(data => {
//                             console.log(data);
//                             setName(data.name);
//                             setCoord(data.coord);
//                             setLat( data.coord?.lat);
//                             setLon( data.coord?.lon)
//                             {<MapContainer
//                             center={[{lat} || 0, {lon} || 0]}
//                             zoom={10}
//                             style={{ height: '400px' }}
//                             >
//                             <TileLayer
//                                 url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//                                 attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//                             />
//                             {coord && (
//                                 <Marker position={[{lat}, {lon}]}>
//                                 <Popup>{name}</Popup>
//                                 </Marker>
//                             )}
//                             </MapContainer>}
//                         })
//                             .catch(error => {
//                                                     console.error(error);
//                                                 });
// }

// return (
// <section>
//     <div className="weatherMap" >
            
//                 {image && 
//                 (
//                     <div >
//                         <input
//                         type="text" value={layer} placeholder='Enter layer'
//                                         onChange={(e) =>
//                                             setLayer(e.target.value)} />

//                         {/* <input type="text" value={x} placeholder='Enter x'
//                                         onChange={(e) =>
//                                             setX(e.target.value)} />
//                         <input type="text" value={y} placeholder='Enter y'
//                                         onChange={(e) =>
//                                             setY(e.target.value)} />
//                         <input type="text" value={z} placeholder='Enter z'
//                                         onChange={(e) =>
//                                             setZ(e.target.value)} /> */}
//                     <button onClick={displayMap}>Display Map</button>
//                     {/* <img src={image} alt="Weather Map"/> */}
//                     </div>
//                 )}
//                     </div>


//     </section>
//   );






export default WeatherMap;

