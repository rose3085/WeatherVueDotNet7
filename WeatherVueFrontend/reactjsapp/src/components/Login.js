
import React, { useState,useEffect } from 'react';
import {useNavigate} from 'react-router-dom';
import Cookies from 'js-cookie';
import "./Login.css";


const Login = () => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const[  validUserName, setValidUserName]= useState(true);
    const[  validPassword, setValidPassword]= useState(true);
    const [data, setData] = useState([]);
    const [token, setToken] = useState(false);
    const [isRegistered, setIsRegistered] = useState('');
    const navigate = useNavigate();
    const[loader, setLoader] = useState(false);
    const [submitClicked, setSubmitClicked] = useState(false);

    const handlePageChange = () =>
    {
        navigate("/Register");
    }


  
    const handleLogin = (event) => {
        
         event.preventDefault();
         //setSubmitClicked(true); 
         
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
                    setValidUserName(true);
                    setValidPassword(true);
                    return response.json();

                }
                if(response.status === 400)
                {
                    setValidUserName(false);
                    setValidPassword(false);
                
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
                        document.cookie = `token=${data.token} expires=Thu, 01 Jan 2025 00:00:00 UTC; path=/; secure; SameSite=None `;
                    //  return response.json();
                        setToken(true);
                        setLoader(true);
                        navigate("/LoadingSpinner");
                        // setTimeout(() => {

                        //     navigate('/LoadingSpinner');
                        //   }, 1000);
                }
                else
                {
                    setValidUserName(false);
                    setValidPassword(false);
                    setLoader(false);
                }
            //   navigate("/Location");
             setSubmitClicked(true); 

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
    // useEffect(()=>
    // {
    //     {token && 
    //     (<>
    //         navigate("/LoadingSpinner");
    //     </>)}
    // },[3000]);


    return (
        <section className="loginMain">
            <div className="toggleLogin">
                <div className="loginComponents">
                <div className="loginForm">
                   Login
                    <form onSubmit={handleLogin}>
                        <div className="userName">
                            <label >
                                
                                {/* <input className={`inputUserName ${validUserName === false ? 'invalid' : ''}`} "type="text"  placeholder='Enter your Username'
                                value={userName}
                                    onChange={(e) =>
                                        setUserName(e.target.value)} /> */}
                                        <input
                                        className={`inputUserName ${validUserName === false ? 'invalid' : ''}`}
                                        type="text"
                                        placeholder='Enter your Username'
                                        value={userName}
                                        onChange={(e) => setUserName(e.target.value)}
                                        />

                            <div >
                            {submitClicked && validUserName === false &&
                            (<div className="invalidMessage">Enter a valid UserName</div>)}
                            </div>
                            </label>
                        </div> 
                       
                        <div className="password">
                            <label>
                                <input                                         
                                className={`inputUserName ${validPassword === false ? 'invalid' : ''}`}
                                type="password" placeholder='Enter your Password'
                                value={password}
                                onChange={(e) =>setPassword(e.target.value)} />

                            {submitClicked && validPassword == false&&
                            (<div className="invalidMessage">
                                Enter a valid Password.</div>)}
                            
                            </label>
                        </div>


                        <div className="submitButton">
                                <button className="button" onClick={handleLogin}>Login</button>
                                
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
                        Don't have an
                         account?</h1>
                    
                    <button className="buttonRegister" onClick={handlePageChange}>
                        Register</button>
                    
                </div>  
                {/* {loader &&
                    (<div className="loginLoader"><LoaderLogin/></div>)} */}
                   
            </div>
        </section>
    );

};

export default Login;