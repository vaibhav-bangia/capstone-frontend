import { useNavigate } from "react-router-dom";
import { useState } from "react";


import DatePicker from 'react-date-picker';

import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'

export default function Signup(props){

    const [mobileValue, setMobileValue] = useState()//State variable for PhoneInput

    const [dateValue, setDateValue] = useState()//State variable for DatePicker

    
    //const navigate = useNavigate();//to navigate to home page after login

    const handleSubmit = async (event) => {
        event.preventDefault();
        // console.log(mobileValue);
        // console.log(typeof(mobileValue));
        
        console.log(dateValue);
        console.log(typeof(dateValue));
    }
        
    return(
        
        <div>

        
            <form onSubmit={handleSubmit}>
                
            <div className="form-row">
                <div className="form-group col-md-6">
                <label htmlFor="username2">Username</label>
                <input type="text" className="form-control" id="username2" placeholder="Username" />
                </div>
                <div className="form-group col-md-6">
                <label htmlFor="email2">Email</label>
                <input type="email" className="form-control" id="email2" placeholder="Email" />
                </div>
            </div>

            <div className="form-row">
                <div className="form-group col-md-6">
                <label htmlFor="password2">Password</label>
                <input type="password" className="form-control" id="password2" placeholder="Password" />
                </div>
            </div>

            <div className="form-row">
                <div className="form-group col-md-6">
                <label htmlFor="rePassword2">Retype Password</label>
                <input type="password" className="form-control" id="rePassword2" placeholder="Enter Again" />
                </div>
            </div>

            <div className="form-row">
                <div className="form-group col-md-6">
                    <label htmlFor="name2">Name</label>
                    <input type="text" className="form-control" id="name2" placeholder="Your Full Name" />
                </div>
            </div>

            <div className="form-group">
                <label htmlFor="bio2">Bio</label>
                <input type="text" className="form-control" id="bio2" placeholder="Your Bio" />
            </div>
            
            <div className="form-group">
                <PhoneInput
                    placeholder="Enter phone number"
                    value={mobileValue}
                    onChange={setMobileValue}>
                </PhoneInput>
            </div>

            <div className="form-group">
                <DatePicker value={dateValue} onChange={setDateValue} />
            </div>

            <input type="submit" className="btn btn-primary" value='Sign Up'/>
            {/* <button type="submit" className="btn btn-primary">Sign Up</button> */}
            </form> 


        </div>
        
        


        
    );
}