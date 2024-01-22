import './LoadingSpinner.css';
import React, {useEffect} from 'react';
import {useNavigate} from 'react-router-dom';


const LoadingSpinner = () =>
{
    const navigate = useNavigate();
    useEffect(() => {
        
        const timeoutId = setTimeout(() => {
         
          navigate('/LoginSuccessful');
        }, 3000);
    
        
        return () => clearTimeout(timeoutId);
      }, [navigate]);
   return(
    <>
        <div className="loader"></div>
    </>
   );
};
export default LoadingSpinner;