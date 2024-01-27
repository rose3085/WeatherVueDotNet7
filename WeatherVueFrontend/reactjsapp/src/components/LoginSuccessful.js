import React, {useState, useEffect} from 'react';
import Location from './Location';
//import checked from './checked.png';
import checked from './checkMarks.png';
import './LoginSucess.css';

import {useNavigate} from 'react-router-dom';

const LoginSuccessful = () =>
{
    const navigate = useNavigate();

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

    useEffect(() => {
        
        const timeoutId = setTimeout(() => {
         
          navigate('/Weather');
        }, 5000);
    
        
        return () => clearTimeout(timeoutId);
      }, [navigate]);
 
    return (
        <>
         {<Location/>}
        <div className="loginSucess">
        <img src={checked}  alt="" height='200px' id='checked'/>
        </div>
        </>
    );
};


export default LoginSuccessful;