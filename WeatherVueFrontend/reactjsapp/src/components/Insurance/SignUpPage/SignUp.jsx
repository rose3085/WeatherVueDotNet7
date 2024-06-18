import {useState,useEffect} from 'react';
import './SignUp.css';
import hand from '../Icons/familyInsurance.png';
import logo from '../Icons/EInsuranceLogo.png';
import cancel from '../Icons/CancelButton.png';
import {useNavigate} from 'react-router-dom';
import right from '../Icons/right.png';

const SignUp = () =>
{

    const [name, setName] = useState('');

    const navigate = useNavigate();
    const handlePageChange = (event) =>
    {
        event.preventDefault();
        navigate("/EnterEmail");
    }
    const handleLoginPageChange = () =>
    {
        navigate("/");
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
                <div className="name">
                    <label>
                        <input className="enterFirstName" type="text" 
                         placeholder="Enter your First Name" value={name}/>
                    </label>
                </div>
                <div className="name">
                    <label>
                        <input className="enterLastName" type="text" 
                         placeholder="Enter your Last Name" value={name}/>
                    </label>
                </div>
               
                <div className="nextPage">
                    {/* <button className="nextButton"onClick={handlePageChange}>Next</button> */}
                    
                    <div><button className="right2" onClick={handlePageChange}>
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
export default SignUp;