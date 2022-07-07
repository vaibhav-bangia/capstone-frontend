import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import './AppNavBar.css'



export default function AppNavBar(props) {

  const navigate = useNavigate()


  const handleClickLogin = async (event) => {
    navigate('/');
  }

  const handleClickSignup = async (event) => {
    navigate('/signup');
  }

  const handleClickLogout = async (event) => {
    props.setIsLoggedIn(false);
    navigate('/');
  }
  
  const handleClickFollowing = async (event) => {
    navigate('/following');
  }

  return (
    <Box sx={{ flexGrow: 1, marginBottom: 3 }}>
      <AppBar position="sticky" style={{backgroundColor: "#18978F"}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          {!props.isLoggedIn &&
            <Button color='inherit' onClick={handleClickLogin} >Login</Button>
          }

          {!props.isLoggedIn &&
            <Button color='inherit' onClick={handleClickSignup} >Sign Up</Button>
          }

          {props.isLoggedIn &&
            
            <Button  sx={{ mx: 10}} variant="contained" style={{color: "#3330E4" , backgroundColor: '#9DD6DF'}} onClick={handleClickFollowing} >Following List</Button>

          }

          { props.isLoggedIn &&
            <div className='navbar-brand'>
                {/* <img src='http://bitly.ws/sDmM' alt='Hello There Image'/> */}
                <img className="profile-pic" src='http://bitly.ws/sDmR' alt='HeYY' />
            </div>
          }

          

          {props.isLoggedIn &&
            <Button style={{color: "#EB4747"}} onClick={handleClickLogout} >Log Out</Button>
          }

          

          
          
        </Toolbar>
      </AppBar>
    </Box>
  );
}
