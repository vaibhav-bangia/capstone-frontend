import { useNavigate } from "react-router-dom";

export default function Login(props){
    
    const navigate = useNavigate();//to navigate to home page after login

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log('Logging In');

        props.setIsLoggedIn(true);
        navigate('/newsfeed');

        //console.log(data);
    }
        
    return(
        <div className="center">
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