import React from 'react';
import {useNavigate} from 'react-router-dom';
import LogOut from './LogOut';
import {IconContext} from "react-icons";
import "./SideDashBoard.css";



const SideDashBoard = () =>
{

    const navigate = useNavigate();
    const handleLogOutClicked = () =>
    {
        navigate('/LogOut');
    };

    return (
        <div className="sideNavigation">
        <div className={"navigationBar"}>
             {/* <div className="logOut">
                <button onClick={handleLogOutClicked}>
                    Log Out
                </button>
             </div> */}
             <div className="logOutNav" onClick={handleLogOutClicked}>LogOut</div>
             <div className="deleteUser">Delete</div>
            
           </div>
        </div>
    );
};

export default SideDashBoard;