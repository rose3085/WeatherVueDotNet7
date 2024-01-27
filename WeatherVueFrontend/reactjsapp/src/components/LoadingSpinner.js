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

      useEffect(()=>
      {
        const handleGoingBack = (event)=>
        {
         event.preventDefault();
         const message = "You are not allowed to go back" ;
         event.returnValue= message;
         return message;
        };
  
        window.addEventListener('beforeunload', handleGoingBack);
  
       return () =>
        {
          window.removeEventListener('beforeunload', handleGoingBack);
        };
      },[]);

      
   return(
    <>
        <div className="loader"></div>
    </>
   );
};
export default LoadingSpinner;