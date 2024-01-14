import React, { useState,useEffect } from 'react';
import {useNavigate} from 'react-router-dom';
import Cookies from 'js-cookie';
import "./Login.css";

const Login = () => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [data, setData] = useState([]);
    const [token, setToken] = useState([]);
    const [isRegistered, setIsRegistered] = useState('');
    const navigate = useNavigate();
    const handlePageChange = () =>
    {
        navigate("/Register");
    }
  
    const handleLogin = (event) => {
         event.preventDefault();
        const apiUrl = `https://localhost:7194/api/Auth/Login`;
        fetch(apiUrl,
            {
                method: 'POST',
                headers:
                {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ userName, password })
            })
            .then(response => {
                if (response.ok) {

                    // const name = data.userName;
                    // localStorage.setItem('userName', name);

                    // //const jwtToken = data.token;
                    // document.cookie = `token=${data.token}; `;
                    return response.json();

                }
               
                throw new Error('Network response was not ok');
            })
            .then(data => {
                 setData(data); 
                 console.log(data);
                 if(data.token && data.userName != null)
                 {
                        const name = data.userName;
                        localStorage.setItem('userName', name);

                        //const jwtToken = data.token;
                        document.cookie = `token=${data.token}; `;
                    //  return response.json();
                    
                        navigate("/LoginSuccessful");
                }
            //   navigate("/Location");
               

            })
            .catch(error => {
                console.error(error);
            });
      
    }

    useEffect(()=>
    {
        const cookieName = 'token';
        if(Cookies.get(cookieName) !== undefined)
            {
                navigate('/Weather');
            }
    },[]);


    return (
        <section className="loginMain">
            <div className="toggleLogin">
                <div className="loginComponents">
                <div className="loginForm">
                    <form onSubmit={handleLogin}>
                        <div className="userName">
                            <label >
                                Username:
                                <input type="text" value={userName}
                                    onChange={(e) =>
                                        setUserName(e.target.value)} />
                            </label>
                        </div>
                        <br />

                        <div className="password">
                            <label>
                                Password:
                                <input type="password" value={password}
                                    onChange={(e) =>
                                        setPassword(e.target.value)} />
                            </label>
                        </div>


                        <div className="submitButton">
                            <br />
                           
                                <button className="button" type="submit">Login</button>
                                
                       </div>

                    {/*    </div>    <div className="registerAccount">*/}
                    {/*    <h1>Don't have an account?</h1>*/}
                    {/*    <Link to="/Register">Register your account?</Link>*/}
                    {/*</div>*/}
                        </form>
                    </div>
                </div>

                    <div className="registerAccount">
                    <h1 className="registerText">
                        Don'thave an account?</h1>
                    <br />
                    <br />
                    <button className="buttonRegister" onClick={handlePageChange}>Register</button>
                    
                </div>   
            </div>
        </section>
    );

};

export default Login;