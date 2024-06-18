import Summary from './Summary';
import PolicyResult from './PolicyResult';
import {useState} from 'react';
import './FilterResult.css';


function FilterResult()
{
            return (<section className="policyResultMain"> 
                <div className="policyResultComponent">
                        <div className="summary"><Summary/>
                        
            </div>
            <div className="filter"><PolicyResult/></div>
                        </div>
            </section>);

}

export default FilterResult;