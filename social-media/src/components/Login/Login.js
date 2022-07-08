import * as React from 'react';
import { useNavigate } from "react-router-dom";

import Snackbar  from "@mui/material/Snackbar";

import Stack from '@mui/material/Stack';

import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function Login(props){
    
    const [error, setError] = React.useState(false);

    const [success, setSuccess] = React.useState(false);
    // const handleClick = () => {
    //     setOpen(true);
    // };

    const handleCloseError = (event, reason) => {
        if (reason === 'clickaway') {
        return;
        }

        setError(false);
    };
    const handleCloseSuccess = (event, reason) => {
        if (reason === 'clickaway') {
        return;
        }

        setSuccess(false);
    };

    const navigate = useNavigate();//to navigate to home page after login

    const handleSubmit = async (event) => {
        event.preventDefault();
        setSuccess(true);
        props.setIsLoggedIn(true);
        navigate('/newsfeed');
        //console.log('Logging In');



        //props.setIsLoggedIn(true);
        // navigate('/newsfeed');

        //console.log(data);
    }
        
    return(
        <div className="center">

            <Stack spacing={2} sx={{ width: '100%' }}>
            <Snackbar open={error} autoHideDuration={6000} onClose={handleCloseError}>

                
                <Alert onClose={handleCloseError} severity="error" sx={{ width: '100%' }}>
                Incorrect Username/Password!
                </Alert>
                
                

            </Snackbar>
            <Snackbar open={success} autoHideDuration={6000} onClose={handleCloseSuccess}>

                
                
                <Alert onClose={handleCloseSuccess} severity="success" sx={{ width: '100%' }}>
                This is a success message!
                </Alert>
                

            </Snackbar>
            </Stack>

            <h1 className="loginsignupheading">Login</h1>
            <form onSubmit={handleSubmit}>

            <div className="form-group col-md-6">
                <label htmlFor="username1">Username</label>
                <input type="text" name="username" className="form-control" id="username1" aria-describedby="emailHelp" placeholder="Enter username"/>
                
            </div>
            <div className="form-group col-md-6">
                <label htmlFor="exampleInputPassword1" >Password</label>
                <input type="password" name = "password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
                <small id="emailHelp" className="form-text text-muted">We'll never share your username or password with anyone else.</small>
            </div>
            <input type="submit" className="btn btn-primary" value='Login'/>
            </form>


            {/* <form onSubmit={handleSubmit}>

                Username: <input type='text' name='username'/><br/>
                Password: <input type='password' name='password'/><br/>
                <input type='submit' value='Login'/>
            </form> */}
            
        </div>
    );
}