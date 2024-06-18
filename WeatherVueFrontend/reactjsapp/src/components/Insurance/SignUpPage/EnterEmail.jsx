import {useState,useEffect} from 'react';
import {useNavigate,NavLink} from 'react-router-dom';
import hand from '../Icons/familyInsurance.png';
import logo from '../Icons/EInsuranceLogo.png';
import cancel from '../Icons/CancelButton.png';
import right from '../Icons/right.png';
import left from '../Icons/left.png';
import './SignUp.css';

const EnterEmail = () =>
{
    const [email, setEmail] = useState('');
    const navigate = useNavigate();
    const handlePageChange = () =>
    {
        navigate("/EnterPhoneNumber");
    }
    const handlePageChangeLeft = () =>
    {
        navigate("/SignUp");
    }

    const handleLoginPageChange = () =>
    {
        navigate("/");
    }
    const handleEmailChange = (e) =>
    {
        setEmail(e.target.value);
    }


    return (
      <section className="signUpMain">
        
        <div className="mainComponent">

            <div className="headerComponent">
                        <div className="logo">
                        <img src={logo}  alt="" height='70px' id='checked'/> 
                        </div>
                        <div className="cancelButton">
                        <img src={cancel}  alt="" height='25px' id='checked'/> 
                        </div>
                   
                </div>
                <div className="signUpComponents">
                
                <div className="signUpForm">
                <p className="welcome">Welcome </p>
                <p className="createAccountInfo">Create an account</p>
            <form className="signUp">
                <div className="email">
                        <label>
                        <input className="enterEmail" type="email" 
                                  onChange={handleEmailChange}  placeholder="Enter your email" value={email} />
                        </label>
                    </div>
                    <div className="nextPage">
                    {/* <button className="nextButton"onClick={handlePageChange}>Next</button> */}
                    <div><button className="left"onClick={handlePageChangeLeft}>
                    <img src={left}  alt="" height='20px' id='checked'/> 

                    </button></div>
                    <div><button className="right"onClick={handlePageChange}>
                    <img src={right}  alt="" height='20px' id='checked'/> 

                    </button></div>
                </div>
            </form>
            <div className="toggleSignUp">
            <div className="lines"> </div>
                    <p className="alreadyAccount"> Already have an account?
                    <div className="navLogin" onClick={handleLoginPageChange}>Login</div>
                    </p>
                </div>

            </div>
            <div className="loginLogo">
                    <div className="handsLogo">
                        <img src={hand}  alt="" height='180px' id='checked'/> 
                    </div> 
                    <p className="quotes">
                    Your best investment is in yourself.
                    </p>
                    </div>
        
        </div> </div>
    </section>
    );

}
export default EnterEmail;