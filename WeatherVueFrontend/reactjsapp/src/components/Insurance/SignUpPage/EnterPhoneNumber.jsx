import {useState,useEffect} from 'react';
import {useNavigate,NavLink} from 'react-router-dom';
import './SignUp.css';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/semantic-ui.css';
import hand from '../Icons/familyInsurance.png';
import logo from '../Icons/EInsuranceLogo.png';
import cancel from '../Icons/CancelButton.png';
import right from '../Icons/right.png';
import left from '../Icons/left.png';


const EnterPhoneNumber = () =>
{
    const [userPhoneNumber, setUserPhoneNumber] = useState('');
    const [countryCode, setCountryCode] = useState('');
    const [isValid, setValid] = useState(true);
    const navigate = useNavigate();
    const handlePageChange = () =>
    {
        navigate("/EnterPassword");
    }

    const handlePageChangeLeft = () =>
    {
        navigate("/EnterEmail");
    }
    const handleLoginPageChange = () =>
    {
        navigate("/");
    }

 
const stringWithoutSpaces = userPhoneNumber.replace(/\s/g, '');
      //done to remove spaces from the phone number

    const urlEncodedPhoneNumber = encodeURIComponent(stringWithoutSpaces);

    const handlePhoneChange = (value, country, e, formattedValue) => {
        
       
        //setValid(true);
        setUserPhoneNumber(formattedValue);
        setCountryCode(country);
        setValid(validatePhoneNumber(value));
      
       
        // Store the phone number in local storage whenever it changes
    };
    const validatePhoneNumber = (userPhoneNumber) =>
    {
        // for 10 digit phone number only
        const PhoneNumberPattern = /^\d{13}$/;
       
         
        return PhoneNumberPattern.test(userPhoneNumber);
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
                    <div className="phoneNumber">
                            <label>
                            <PhoneInput  inputStyle={{ width: '250px',
                                                         color:'black'}}
                            containerClass='react-tel-input' 
                            country={"np"}  onlyCountries={['np']}
                            value={userPhoneNumber} countryCodeEditable={false}
                            onChange={handlePhoneChange} 
                            limitMaxLength={true}
                            disabled={false} enableSearch={true}
                            
                       />
                            </label>
                        </div>
                        <div className="nextPage">
                        <div><button className="left"onClick={handlePageChangeLeft}>
                    <img src={left}  alt="" height='20px' id='checked'/> 

                    </button></div>
                    <div><button className="right"onClick={handlePageChange}>
                    <img src={right}  alt="" height='20px' id='checked'/> 
                    </button> </div>
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
export default EnterPhoneNumber;