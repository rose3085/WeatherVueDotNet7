import {useState,UseEffect} from 'react';
import insuranceIcon from '../Icons/insuranceIcon.png';
import './ViewDetail.css';
import userData from './data.json';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import cancel from '../Icons/CancelButton.png';
import phoneCall from '../Icons/phoneCall.png';
import internet from '../Icons/internet.png';


const ViewDetail = () =>
{
    // const[companyName, setCompanyName] = useState('');
    // const[policyName, setPolicyName] = useState('');
    // const[policyDescription, setPolicyDescription] = useState('');
    // const[policyType, setPolicyType] = useState('');
    // const[policyLaunchDate, setPolicyLaunchDate] = useState('');
    // const[minEntryAge, setMinEntryAge] = useState('');
    // const[maxEntryAge, setMaxEntryAge] = useState('');
    // const[expiryAge, setExpiryAge] = useState('');
    // const[minCover, setMinCover] = useState('');
    // const[maxCover, setMaxCover] = useState('');
    // const[maturityBenefits, setMaturityBenefits] = useState('');
    // const[surrenderPolicy, setSurrenderPolicy] = useState('');
    // const[paymentMode, setPaymentMode] = useState('');
    // const[riskCommencementPeriod,setRiskCommencementPeriod]= useState('');
    // const[riskCommencementDetails, setRiskCommencementDetails] = useState('');
    // const[policyTerm, setPolicyTerm] = useState('');
    // const[website, setWebsite] = useState('');
    // const[phoneNumber, setPhoneNumber] = useState('');

    const navigate = useNavigate();

    const handleCancelButton = () =>
    {
        navigate("/FilterResult");
    }

        const companyName ="Parbhu Mahalaxmi Life Insurance";
        const phoneNumber = "+977-1 5326856";
          const website= "https://www.pmlil.com/";
          const policyName = "Amulya Jeevan Beema";
          const policyDescription = "A simple Whole life cum endowment policy providing financial security up to 100 years of age. It offers lifelong protection, security to fulfill financial obligations, tax benefits, additional coverage through riders, and profit sharing vested in the policy.";

          const policyLaunchDate= "2074-07-30T00:00:00";
          const policyType= "Whole Life Cum Endowment";
          const minEntryAge= 16;
          const maxEntryAge= 65;
          const expiryAge= 70;
          const minCover= 100000;
          const maxCover = null;
          const maturityBenefits= "Lifelong protection. Security to fulfill financial obligation. Tax Benefit: 40,000.00 annual premium is deductible while computing your annual taxable income. Additional Coverage throughout policy term in terms of Riders: Accidental Death Benefit (ADB), Total Permanent Disability (TPD) Benefit due to accident, and Premium Waiver Benefit (PWB). Sharing of Profit and vested in policy.";

          const surrenderPolicy=null;
          const paymentMode="Yearly / Montly / Quaterly / Half Yearly";
          const riskCommencementPeriod=null;
          const riskCommencementDetails= null;
          const policyTerm = 5;
        
      

          const dateWithoutTime =  policyLaunchDate.split("T")[0];





      return (
        <section className="viewDetailsMain">
            <div className="viewDetailsHeader">
            <div className="cancelButtons">
                    <div className="cancel" onClick={handleCancelButton}><img src={cancel}  alt=""       height='25px' id='checked'/> </div>
                    </div>
               
        <div className="policyNameDiv">
            <div><img src={insuranceIcon}  alt=""height='45px' id='checked'/></div>
            <p className="policyName">{policyName}</p>
               </div>
               
            </div>
            <div className='otherDetails'>
            <div className='policyDescription'>
                {policyDescription}
               </div>
                <table>
                <thead>
                <tr>
                    <th>Features</th>
                    <th>Details</th>
                
                </tr>
                </thead>
                    <tbody>
                    <tr>
                        <td>Policy Type</td>
                        <td>{policyType}</td>
                    
                    </tr>
                    <tr>
                        <td>Min Entry Age</td>
                        <td>{minEntryAge}</td>
                        
                    </tr>
                    <tr>
                        <td>Max Entry Age</td>
                        <td>{maxEntryAge}</td>
                        
                    </tr>
                    <tr>
                        <td>Expiry Age</td>
                        <td>{expiryAge}</td>
                        
                    </tr>
                    <tr>
                        <td>Min Cover</td>
                        <td>{minCover}</td>
                        
                    </tr>
                    {maxCover?<tr>  {policyName? <div className="">{policyName}</div>:null}
                        <td>Max Cover</td>
                        <td>{maxCover}</td>
                        
                    </tr> : null}
                    <tr>
                        <td>Payment Mode</td>
                        <td>{paymentMode}</td>
                        
                    </tr>
                    <tr>
                        <td>Policy Term</td>
                        <td>{policyTerm}</td>
                        
                    </tr>
                    </tbody>
      </table>
        {maturityBenefits ? <div className="policyType">
            <div className="descriptionLable">Maturity Benefits:</div>
            <div>{ maturityBenefits}</div>
        </div>:null}

        {surrenderPolicy? <div className="policyType">
            <div className="descriptionLable">Surrender Policy:</div>
            <div>{ surrenderPolicy}</div>
        </div>:null}
        
        { riskCommencementPeriod?<div className="policyType">
            <div className="descriptionLable">Risk Commencement Period:</div>
            <div>{ riskCommencementPeriod}</div>
        </div>: null }

       { riskCommencementDetails?  <div className="policyType">
            <div className="descriptionLable">Risk Commencement Details:</div>
            <div>{ riskCommencementDetails}</div>
        </div> : null}
            <div className="viewDetailsFooter">
                <div className="companyName">{companyName}
                        {policyLaunchDate ? <div className="policyLaunchDate">
                            <div>Policy Launch Date :</div> {dateWithoutTime}</div> : null}
                          
                </div>
                <div className="contactCompany">
                    <p className="needHelp"> Need Help?</p>
                    <div className="contactNumber">
                        <div className="callImage"><img src={phoneCall}  alt=""height='25px' id='checked'/></div>
                        <div>{phoneNumber}</div>
                    </div>

                    <div className="contactNumber">
                        <div className="callImage"><img src={internet}  alt=""height='25px' id='checked'/></div>
                        <div>  <a href={website}  target="_blank" rel="noopener noreferrer" >{website}</a></div>
                    </div>
                </div>
              </div>
              </div>


             
        </section>
      );


}

export default ViewDetail;