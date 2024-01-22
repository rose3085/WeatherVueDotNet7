import './Loader.css';
import React, {useEffect} from 'react';
import {useNavigate} from 'react-router-dom';


const Loader = () =>
{
    const navigate = useNavigate();
    useEffect(() => {
        
        const timeoutId = setTimeout(() => {
         
          
        }, 3000);
    
        
        return () => clearTimeout(timeoutId);
      }, []);
   return(
    <>
        <div className="load"></div>
    </>
   );
};
export default Loader;