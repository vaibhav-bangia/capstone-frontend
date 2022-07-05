// import { useEffect } from 'react';
import {Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function Navbar(props){

    const navigate = useNavigate();

    const handleClick = (e) => {
        //console.log(props.isLoggedIn);
        props.setIsLoggedIn(false);
        //setTimeout(() => {console.log(props.isLoggedIn)},5000);
        //console.log(props.isLoggedIn);
        navigate('/');
        //console.log(props.isLoggedIn);
    }

    // useEffect(() => {
    //     console.log(props.isLoggedIn);
    // },[props.isLoggedIn]);

    return(
        <div>
            <nav className='navbar navbar-dark bg-dark'>

            { !props.isLoggedIn &&
                <Link to = '/' className='navbar-brand'><button type="button" className = "navb btn btn-outline-info">Login Page</button></Link>
            }

            { !props.isLoggedIn &&
                <Link to = '/signup' className='navbar-brand'><button type="button" className = "navb btn btn-outline-info">Signup Page</button></Link>
            }

            {/* <Link to = '/removeposts'><button>Remove Posts</button></Link> */}
            
            { props.isLoggedIn &&
                <div className='navbar-brand'><button onClick={handleClick} type="button" className = "navb btn btn-outline-danger">Log Out</button></div>
            }
            </nav>
        </div>
    );
}