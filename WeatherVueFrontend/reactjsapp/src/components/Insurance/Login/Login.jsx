import './Login.css';
import {useState} from 'react';
import {useNavigate,NavLink} from 'react-router-dom';
import hand from '../Icons/happy.png';
import logo from '../Icons/EInsuranceLogo.png';
import cancel from '../Icons/CancelButton.png';

const Login = () =>
{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    
    const navigate = useNavigate();
    const handlePageChange = () =>
    {
        navigate("/SignUp");
    }


    return (
        <section className="loginMain">
            <div className="mainComponent">
                <div className="headerComponent">
                    <div className="logo">
                    <img src={logo}  alt="" width="120px" height='70px' id='checked'/> 
                    </div>
                    <div className="cancelButton">
                    <img src={cancel}  alt="" height='25px' id='checked'/> 
                    </div>
                   
                </div>
            <div className="loginComponents">
                <div className="loginLogo">
                <div className="handsLogo">
        <img src={hand}  alt="" height='150px' id='checked'/> 
        </div>
        <p className="quotes">The best time to get insurance <br/> is before you need it.</p>
                </div>
            <div className="loginForm">
                <p className="welcomeBack">Welcome Back</p>
                <p className="loginInfo">Log in your account</p>
                <form>
                    <div className="email">
                        <label>
                            <input className="enterEmail" type="email" 
                                placeholder="Enter your email" value={email} />
                        </label>
                    </div>
                    <div className="password">
                        <label>
                            <input className="enterPassword" type="password"
                            placeholder="Enter your password" value={password}/>
                        </label>
                    </div>
                    <div className="submitButton">
                        <button className="button" type="submit">Continue</button>
                    </div>
                    
                </form>
                <div className="toggleRegister">
                    <p className="noAccount"> Don't have an account?
                    <div className="navSignUp" onClick={handlePageChange}>SignUp</div>
                    </p>
                </div>
            </div></div>
            </div>
        </section>
    );
}

export default Login;