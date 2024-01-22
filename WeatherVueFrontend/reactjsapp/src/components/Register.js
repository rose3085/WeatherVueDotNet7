import React, { useState } from 'react';
import "./Register.css";
import { useNavigate,Link } from 'react-router-dom';
const Register = () => {
    const [email, setEmail] = useState("");
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const[  validUserName, setValidUserName]= useState('');
    const[  validPassword, setValidPassword]= useState('');
    const[  validEmailError, setValidEmailError]= useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [data, setData] = useState([]);
    const navigate = useNavigate();
    const [submitClicked, setSubmitClicked] = useState(false);




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
                    
                    //const name = data.userName;
                    //localStorage.setItem('userName', name);

                    //const jwtToken = data.token;
                    //document.cookie = `token=${jwtToken}; path=/;  secure; samesite=strict;`;
                    return response.json();


                }
                if (response.status === 400)
                {
                    setValidEmailError(false);
                }
                if(response.status === 200 && response.isSucceed == false)
                {
                    setValidUserName(false);
                }
                throw new Error('Network response was not ok');
            })
            .then(data => {
                console.log(data);
                setData(data);
              
                if(data.userName !=null)
                {
                const name = data.userName;
                localStorage.setItem('userName', name);
                navigate('/LoadingSpinner');
                //const jwtToken = data.token;
                //document.cookie = `token=${jwtToken}; path=/;  secure; samesite=strict;`;
                }
            })
            .catch(error => {
                console.error(error);
            });
    }

    return (
        
            <div className="toggleRegister">
                <div className="registerComponents">
                   Register
                    <form className="registerForm" onSubmit={handleRegister}>
           
                <label className="userName">
                  
                    <input className={`inputUserName ${validUserName === false ? 'invalid' : ''}`}
                     type="text" value={userName} placeholder='Enter your Username' onChange={(e) =>
                        setUserName(e.target.value)} />
                         {submitClicked && validUserName  &&
                            (<div className="invalidMessage">Enter a valid username</div>)}
                           
                </label>
               
                        <label className="userName">
                   
                    <input className="inputUserName" type="text" value={firstName} placeholder='Enter your First Name' onChange={(e) =>
                        setFirstName(e.target.value)} />
                </label>
                
                        <label className="userName">
                   
                    <input  className="inputUserName" type="text" value={lastName}
                        placeholder='Enter your Last Name' onChange={(e) =>
                        setLastName(e.target.value)} />
                </label>
                       
                        
                        <label className="userName">
                   
                    <input   className={`inputUserName ${validEmailError === false ? 'invalid' : ''}`}
                            type="email" value={email} 
                            placeholder='Enter your Email' onChange={(e) =>
                             setEmail(e.target.value)} />
                            {validEmailError  &&
                            (<div className="invalidMessage">Invalid Email</div>)}
                </label>
                        <label className="userName">
                   
                    <input  className="inputUserName" type="password" 
                        placeholder='Enter your Password' value={password} onChange={(e) =>
                        setPassword(e.target.value)} />
                </label>
                
                        <label className="userName">
                   
                    <input className="inputUserName" type="password" 
                        placeholder='Confirm Password' value={confirmPassword} onChange={(e) =>
                        setConfirmPassword(e.target.value)} />
                        </label>
                
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
