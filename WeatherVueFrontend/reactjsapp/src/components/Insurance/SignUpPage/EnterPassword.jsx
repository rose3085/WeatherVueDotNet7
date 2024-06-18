import {useState,useEffect} from 'react';
import {useNavigate,NavLink} from 'react-router-dom';
import './SignUp.css';
import hand from '../Icons/familyInsurance.png';
import logo from '../Icons/EInsuranceLogo.png';
import cancel from '../Icons/CancelButton.png';
import left from '../Icons/left.png';
import show from '../Icons/show.png';
import hide from '../Icons/hide.png';

const EnterPassword = () =>
{
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
    const handleLoginPageChange = () =>
    {
        navigate("/");
    }
    const handlePageChangeLeft = (event) =>
    {
        event.preventDefault();
        navigate("/EnterPhoneNumber");
    }


    const handlePasswordChange = (e) =>
    {
        setPassword(e.target.value);
    }
    const handleConfirmPasswordChange = (e) =>
    {
        setConfirmPassword(e.target.value);
    }
    const passwordVisibility = (event) => {
        event.preventDefault();
        setShowPassword(!showPassword);
      };
    return (
        <section className="signUpMain">
          
          <div className="mainComponent">
  
          <div className="headerComponent">
                    
                        <div className="logo">
                        <img src={logo}  alt="" width="130px" height='70px' /> 
                        </div>
                   
                        <div className="cancelButton">
                        <img src={cancel}  alt="" height='25px' /> 
                        </div>
                     
                  </div>
                  <div className="signUpComponents">
                  
                  <div className="signUpForm">
                  <p className="welcome">Welcome </p>
                <p className="createAccountInfo">Create an account</p>
              <form className="signUp">

              <div className="password">
                    <label>
                    <input className="enterPassword" type={showPassword ? "text" : "password"}
                         onChange={handlePasswordChange}   placeholder="Enter your Password" value={password}/>
                    </label>
                </div>

                <div className="confirmPassword">
                    <label>
                    <input className="enterConfirmPassword" type={showPassword ? "text" : "password"}
                         onChange={handleConfirmPasswordChange}   placeholder="Confirm Password" value={confirmPassword}/>
                    </label>
                </div>
                <div className="nextPages">
                        <div><button className="lefts"onClick={handlePageChangeLeft}>
                            <img src={left}  alt="" height='20px' id='checked'/> 

                            </button></div>
                            <div>
                                <div className="passwordVisible">
                            <button className="showPassword" onClick={passwordVisibility}>
                           {!showPassword ? 
                           <img src={hide}  alt="" height='20px' id='checked'/>   : 
                        // 'show Password': 'hide Password'
                            <img src={show}  alt="" height='20px' id='checked'/> 
                        }
                            </button></div>
                             {/* <button className="show" onClick={passwordVisibility} > 
                                <img src={showPassword ? hide : show }  alt="" height='20px' id='checked'/> </button> */}
                            
                            </div>
                        </div>

                <div className="submitButton">
                        <button className="button" type="submit">Register</button>
                    </div>

                    <div className="nextPage">
                    {/* <button className="nextButton"onClick={handlePageChange}>Next</button> */}
                   
                </div>
              </form>
               
              <div className="toggleSignUp">
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
export default EnterPassword;