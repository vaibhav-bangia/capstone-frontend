import { useNavigate } from "react-router-dom";
import { useState } from "react";


import DatePicker from 'react-date-picker';

import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'

export default function Signup(props){

    const navigate = useNavigate();

    const [mobileValue, setMobileValue] = useState()//State variable for PhoneInput

    const [dateValue, setDateValue] = useState()//State variable for DatePicker

    // const handleClick = () => {
    //     console.log(parseInt(mobileValue));
    // }
    const handleSubmit = async (event) => {
        event.preventDefault();
        
        let user = {
            username: event.target.elements.username.value,
            email: event.target.elements.email.value,
            password: event.target.elements.password.value,
            bio: event.target.elements.bio.value,
            phonenumber: parseInt(mobileValue),
            photoaddress: "http://bitly.ws/sGxq"

        }

        let url = 'http://localhost:8080/users/save';
        let options = {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        }
        
        let res = await fetch(url,options);
        let data = await res.json();
        console.log(data);

        if(data.status === 'success'){
            //props.setIsLoggedIn(true);

            console.log("User Added")
            //code for showing success snackbar to be done here

            //navigate('/newsfeed');
        }
        else{
            console.log("Invaild Information");
        }
        //console.log('Logging In');

        // console.log(dateValue);
        // console.log(typeof(dateValue));

        //props.setIsLoggedIn(true);
        // navigate('/newsfeed');

        //console.log(data);
    }
    
    //const navigate = useNavigate();//to navigate to home page after login

    // const handleSubmit = async (event) => {
    //     event.preventDefault();
    //     // console.log(mobileValue);
    //     // console.log(typeof(mobileValue));
        
    //     console.log(dateValue);
    //     console.log(typeof(dateValue));
    // }
        
    return(
        


        <div className="center">
            
            {/* <button onClick={handleClick}>Click Mob</button> */}

            <h1 className="loginsignupheading">Signup</h1>
            <form onSubmit={handleSubmit}>
                
            <div className="form-row">
                <div className="form-group col-md-6">
                <label htmlFor="username2">Username</label>
                <input type="text" name="username" className="form-control" id="username2" placeholder="Username" />
                </div>
                
            </div>
            <div className="form-row">
                <div className="form-group col-md-6">
                <label htmlFor="email2">Email</label>
                <input type="email" name="email" className="form-control" id="email2" placeholder="Email" />
                </div>
            </div>

            <div className="form-row">
                <div className="form-group col-md-6">
                <label htmlFor="password2">Password</label>
                <input type="password" name="password" className="form-control" id="password2" placeholder="Password" />
                </div>
            </div>

            <div className="form-row">
                <div className="form-group col-md-6">
                <label htmlFor="rePassword2">Retype Password</label>
                <input type="password" className="form-control" id="rePassword2" placeholder="Enter Again" />
                </div>
            </div>

            {/* <div className="form-row">
                <div className="form-group col-md-6">
                    <label htmlFor="name2">Name</label>
                    <input type="text" className="form-control" id="name2" placeholder="Your Full Name" />
                </div>
            </div> */}

            <div className="form-group">
                <label htmlFor="bio2">Bio</label>
                <input type="text" name="bio" className="form-control" id="bio2" placeholder="Your Bio" />
            </div>
            
            <div className="form-group">
                <PhoneInput
                    placeholder="Enter phone number"
                    value={mobileValue}
                    onChange={setMobileValue}>
                </PhoneInput>
            </div>

            {/* <div className="form-group">
                <DatePicker value={dateValue} onChange={setDateValue} />
            </div> */}

            <input type="submit" className="btn btn-primary" value='Sign Up'/>
            {/* <button type="submit" className="btn btn-primary">Sign Up</button> */}
            </form> 


        </div>
        
        


        
    );
}