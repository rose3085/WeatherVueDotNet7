import {useEffect, useState} from 'react';
import "./Summary.css";
import filter from '../Icons/filter2.png';

const Summary = () =>
{
    //const [name, setName] = useState('');
    //const [dateOfBith, setDateOfBith] = useState('');
    // const [typeOfCover, setTypeOfCover] = useState('');
    //const [policyTerm, setPolicyTerm] = useState('');
    //const [coverAmount, setCoverAmount] = useState('');
    
    const name = " Ms Rabina Sedhai";
    const dateOfBith = "30/12/2003";
    const typeOfCover = "Endowment Plan";
    const policyTerm = "15 years";
    const coverAmount = "RS 100,000";
    const salary = "RS 500,000";

    //   const currentYear = new Date().getFullYear();
    // const calculateAge = () => {
    //     debugger;
    
    //   const enteredYear = parseInt(dateOfBith);
  
    //   if (!isNaN(enteredYear)) {
    //     const calculatedAge = currentYear - enteredYear;
    //     setAge(calculatedAge);
    //   } else {
    //     setAge('');
    //   }
    // }

return(
    <section className="mainComponentSummary">
            <div className="summaryComponent">
                <div className="filters">
                    <div className="filterImg"><img src={filter}  alt="" height='23px' id='checked'/> </div>
                    <div><p className="filterText">Filter Results</p></div>
                </div>
                <div className="line"> </div>
                    <div className="name">
                        {name}
                    </div>
                    {/* <div className="dateOfBirth">
                        <p className="filterLabel">Date of Birth :</p>
                        <div className="coverName">{currentYear}</div>
                    </div> */}
                    {/* <div className="salary">
                        <p className="filterLabel">Salary :</p>
                        {salary}
                    </div> */}
                    <div className="policyTypes">
                        <p className="filterLabel">Type of Policy :</p>
                        <div className="coverName">{typeOfCover}</div>
                    </div>
                    <div className="policyTypes">
                        <p className="filterLabel">Policy Term :</p>
                        <div className="coverName">{policyTerm}</div>
                    </div>
                    <div className="policyTypes">
                        <p className="filterLabel">Cover Amount</p>
                        <div className="coverName">{coverAmount}</div>
                    </div>
            </div>
    </section>
);

}

export default Summary;