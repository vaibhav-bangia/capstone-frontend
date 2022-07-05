// import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

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
            
            <nav className='navbar navbar-dark bg-dark nb'>
            <div class="container">
                <div class="row">
                    <div class="col-md-12 text-center">
                        <h3 class="animate-charcter"> Social Zone</h3>
                    </div>
                </div>
            </div>
                {/* <a class="navbar-brand container" href="#">Social Zone</a> */}
                {!props.isLoggedIn &&
                    <Link to='/' className='navbar-brand'><button type="button" className="navb btn btn-outline-info">Login Page</button></Link>
                }

                {!props.isLoggedIn &&
                    <Link to='/signup' className='navbar-brand'><button type="button" className="navb btn btn-outline-info">Signup Page</button></Link>
                }

                {/* <Link to = '/removeposts'><button>Remove Posts</button></Link> */}

                {props.isLoggedIn &&
                    <div className='navbar-brand' ><button onClick={handleClick} type="button" className="navb btn btn-outline-danger">Log Out</button></div>
                }
            </nav>
        </div>
    );
}


// <form class="form-inline my-2 my-lg-0">
//       <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
//       <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
//     </form>