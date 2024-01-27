import React,{useState, useEffect} from 'react';
import {Link,useNavigate} from 'react-router-dom';

import "./DeleteUser.css";

const DeleteUser = () =>
{
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const[  validUserName, setValidUserName]= useState(true);
    const[  validPassword, setValidPassword]= useState(true);
    const[loader, setLoader] = useState(false);
    const [submitClicked, setSubmitClicked] = useState(false);
    const [validEmailError, setValidEmail] = useState("");
    const [email, setEmail] = useState("");
    const [data, setData] = useState([]);
    const navigate = useNavigate ();

    const handleDelete = (event) =>
    {
        event.preventDefault();
        const apiUrl = `https://localhost:7194/api/Auth/Delete`;
        fetch(apiUrl,
            {
                method: 'POST',
                headers:
                {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ userName, email, password })
            })
            .then(response => {
                if (response.ok) 
                {
                    
                    document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
                    window.location.href = '/LogOutLoader';
                    navigate('/');
                    return response.json();
                }

            //     if(data.userName === `null`)
            //     {
            //         setValidUserName(false);
            // //     setValidPassword(false);
            // //     setEmail(false);
            //     }
            //     // if(!response.ok)
            //     // {
            //     //     setValidUserName(false);
            //     //     setValidPassword(false);
            //     //     setEmail(false);
            //     // }
            })
            .then(data => {
                    console.log(data);
                 
                  
                })
            .catch(error => {
                console.error(error);
            });
    }

    return (
    <section>
        <div className="deleteWrap">
        <form className="deleteUser">
            Delete Your Account?
        <label className="userNameDelete">
            <input className={`userNameInputDelete  ${validUserName === false ? 'invalid' : ''}`} type="text"
             value={userName} placeholder="Enter your Username" 
             onChange={(e)=>setUserName(e.target.value)}></input>
        </label>
        
        <label className="emailDelete">
            <input className="emailInputDelete" type="email"
             value={email} placeholder="Enter your Email" 
             onChange={(e)=>setEmail(e.target.value)}></input>
        </label>

        <label className="passwordDelete">
            <input className="passwordInputDelete" type="password"
             value={password} placeholder="Enter your password" 
             onChange={(e)=>setPassword(e.target.value)}></input>
        </label>
        {!setValidUserName && 
        <div className="invalidMessage">Invalid Credentials</div>
        }
        <div className="submitButton">
                    
                    <button className="deleteButton" onClick={handleDelete}>Delete</button>

                    
                    </div>
        </form>

        <div className="cancelButton">
           <Link to="/Weather">Click here to cancel</Link>
        </div>
        </div>
    </section>);
};

export default DeleteUser;