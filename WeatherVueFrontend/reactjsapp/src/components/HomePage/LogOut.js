import React,{useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import './LogOut.css';
const LogOut = () =>
{

    const navigate = useNavigate();

    const handleLogOut = () =>
    {
        document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        window.location.href = '/LogOutLoader';
    };

    const  handleNoButton = () =>
    {
        navigate('/Weather');
    }

    return(
        <section>
            <div className="logOutPageWrap">
                <div className="logOutText">Log Out</div>
                <div className="confirmText">Are you sure you want to log out?</div>
                <div className="confirmButton">
               
                    <div className="logOutYes">
                    <button className="yesButton"onClick={handleLogOut}>
                        <div className="buttonText">Yes</div></button>
                    </div>
                    <div className="logOutNo">
                        <button className="noButton" onClick={handleNoButton}>
                        <div className="buttonText">No</div></button>
                    </div>
                </div>
            </div>
            
        </section>
    );

};

export default LogOut;
