import { useNavigate } from "react-router-dom";

export default function Login(props){
    
    const navigate = useNavigate();//to navigate to home page after login

    const handleSubmit = async (event) => {
        event.preventDefault();

        let user = {
            username: event.target.elements.username.value,
            password: event.target.elements.password.value
        }
        let url = 'http://localhost:3001/login';
        let options = {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        }
        let res = await fetch(url, options);
        let data = await res.json();
        //console.log(data);
        if(data.flag){
            //console.log(data.msg);
            props.setIsLoggedIn(true);
            props.setUserId(data.userId);
            navigate('/posts');
        }
        else{
            alert(data.msg);
        }
        //console.log(data);
    }
        
    return(
        <div>

            <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="username1">Username</label>
                <input type="text" name="username" className="form-control" id="username1" aria-describedby="emailHelp" placeholder="Enter username"/>
                
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
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