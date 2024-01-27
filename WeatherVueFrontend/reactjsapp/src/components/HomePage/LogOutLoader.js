import './LogOutLoader.css';
import React, {useEffect} from 'react';
import {useNavigate} from 'react-router-dom';


const LoaderLogin = () =>
{
    const navigate = useNavigate();
    useEffect(() => {
        
        const timeoutId = setTimeout(() => {
         
          navigate("/");
        }, 3000);
    
        
        return () => clearTimeout(timeoutId);
      }, []);
   return(
    <>
        <div className="loadLogin"></div>
    </>
   );
};
export default LoaderLogin;