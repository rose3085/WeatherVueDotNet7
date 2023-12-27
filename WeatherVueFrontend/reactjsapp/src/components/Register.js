import React, { useState } from 'react';
import "./Register.css";
import { Link } from 'react-router-dom';
const Register = () => {
    const [email, setEmail] = useState("");
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [data, setData] = useState([]);




    const handleRegister = async (event) => {
        event.preventDefault();
        const apiUrl = `https://localhost:7194/api/Auth/Register`;
        fetch(apiUrl,
            {
                method: 'POST',
                headers:
                {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ userName, password ,email,confirmPassword,firstName, lastName})
            })
            .then(response => {
                if (response.ok) {
                    
                    const name = data.userName;
                    localStorage.setItem('userName', name);

                    const jwtToken = data.token;
                    document.cookie = `token=${jwtToken}; path=/;  secure; samesite=strict;`;
                    return response.json();


                }

                throw new Error('Network response was not ok');
            })
            .then(data => {
                console.log(data);
                setData(data);
            })
            .catch(error => {
                console.error(error);
            });
    }

    return (
        
            <div className="toggleLogin">
                <div className="registerComponents">
                   
                    <form className="registerForm" onSubmit={handleRegister}>
            <div className="leftPart">
                <label className="userName">
                    Username:
                    <input type="text" value={userName} onChange={(e) =>
                        setUserName(e.target.value)} />
                </label>
               
                        <label className="userName">
                    First Name:
                    <input type="text" value={firstName} onChange={(e) =>
                        setFirstName(e.target.value)} />
                </label>
                
                        <label className="userName">
                    Last Name:
                    <input type="text" value={lastName} onChange={(e) =>
                        setLastName(e.target.value)} />
                </label>
                        </div>
                        <div className="rightPart">
                        <label className="userName">
                    Email:
                    <input type="email" value={email} onChange={(e) =>
                        setEmail(e.target.value)} />
                </label>
                        <label className="userName">
                    Password:
                    <input type="password" value={password} onChange={(e) =>
                        setPassword(e.target.value)} />
                </label>
                
                        <label className="userName">
                    Confirm Password:
                    <input type="password" value={confirmPassword} onChange={(e) =>
                        setConfirmPassword(e.target.value)} />
                        </label>
                </div>
                <br />

                <div className="submitButton">
                    
                    <button type="submit">Register</button>
                    <Link to="/">Login</Link>
                </div>
                        </form>
                    </div>
                </div>
                         
    );

};
export default Register;
