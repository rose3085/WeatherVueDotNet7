import React from 'react';
import {IconContext} from "react-icons";
import SearchBar from './SearchBar';


const Header = () =>
{


    return (
        <>
        <div className={"navigationBar"}>
            <div className={"searchBarSection"}><SearchBar/></div>
            
           </div>
        </>
    );
};

export default Header;