// import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import './Navbar.css';

export default function Navbar(props) {

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

    return (
        <div>
            
            <nav className='navbar navbar-dark bg-dark nb navbar-expand-md justify-content-center'>
                {/* Name of website */}
            <div class="container">
                <div class="row">
                    <div class="col-md-12 text-center">
                        <h3 class="animate-charcter"> Social Zone</h3>
                    </div>
                </div>
                {/* Name of website code ends */}
            </div>

            <ul className='nav navbar-nav ml-auto w-100 justify-content-end'>

                {/* <a class="navbar-brand container" href="#">Social Zone</a> */}
                
                {/* Login  Button*/}
                <li>
                {!props.isLoggedIn &&
                    <Link to='/' className='navbar-brand'><button type="button" className="navb btn btn-outline-info">Login Page</button></Link>
                }
                </li>
                
                {/* SignUP Button*/}
                <li>
                {!props.isLoggedIn &&
                    <Link to='/signup' className='navbar-brand'><button type="button" className="navb btn btn-outline-info">Signup Page</button></Link>
                }
                </li>

                {/* <Link to = '/removeposts'><button>Remove Posts</button></Link> */}

                {/* Signup  */}
                <li>
                { props.isLoggedIn &&
                    <div className='navbar-brand'>
                        {/* <img src='http://bitly.ws/sDmM' alt='Hello There Image'/> */}
                        <img class="profile-pic" src='http://bitly.ws/sDmR' alt='HeYY' />
                        {/* <img src='http://bitly.ws/sDmR' alt='Hello There Image'/> */}
                    </div>
                }</li>

                <li>
                {props.isLoggedIn &&
                    <div className='navbar-item' ><button onClick={handleClick} type="button" className="navb btn btn-outline-danger">Log Out</button></div>
                }</li>

            </ul>
            </nav>
        </div>
    );
}


// <form class="form-inline my-2 my-lg-0">
//       <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
//       <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
//     </form>