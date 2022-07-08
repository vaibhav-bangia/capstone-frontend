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

import DeleteIcon from '@mui/icons-material/Delete';

import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';

import Tooltip from '@mui/material/Tooltip';



import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


import InputBase from '@mui/material/InputBase';
import { styled, alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));






export default function AppNavBar(props) {

  const navigate = useNavigate()



  //code and state variable for adding a post
  const [addPostOpen, setAddPostOpen] = React.useState(false);

  const handleClickOpen = () => {
    setAddPostOpen(true);
  };

  const handleClose = () => {
    setAddPostOpen(false);
  };



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

  const handleClickFollower = async (event) => {
    navigate('/follower');
  }
  

  return (
    <Box sx={{ flexGrow: 1, marginBottom: 3 }}>
      <AppBar position="sticky" style={{backgroundColor: "#18978F"}}>
        <Toolbar>

          <Tooltip title="Add a Post">
            <IconButton onClick={handleClickOpen}
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <AddAPhotoIcon />
            </IconButton>
          </Tooltip>

          <Dialog open={addPostOpen} onClose={handleClose} fullWidth maxWidth="sm">
          <DialogTitle>Add Comment</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Enter Your Comment Below 
            </DialogContentText>
            
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Comment"
              type="email"
              fullWidth
              variant="standard"
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleClose}>Add Post</Button>
          </DialogActions>
        </Dialog>


          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to ='/newsfeed' ><h3 className="animate-charcter"> Social Zone</h3></Link>
          </Typography>
          {!props.isLoggedIn &&
            <Button color='inherit' onClick={handleClickLogin} >Login</Button>
          }

          {!props.isLoggedIn &&
            <Button color='inherit' onClick={handleClickSignup} >Sign Up</Button>
          }

          { props.isLoggedIn &&
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
              />
            </Search>
          }

          {props.isLoggedIn &&
            
            <Button  sx={{ mx: 6}} variant="contained" style={{color: "#3330E4" , backgroundColor: '#9DD6DF'}} onClick={handleClickFollowing} >Following</Button>

          }

          {props.isLoggedIn &&
            
            <Button  sx={{ mx: 6}} variant="contained" style={{color: "#3330E4" , backgroundColor: '#9DD6DF'}} onClick={handleClickFollower} >Followers</Button>

          }

          { props.isLoggedIn &&
            <div className='navbar-brand'>
                {/* <img src='http://bitly.ws/sDmM' alt='Hello There Image'/> */}
                <Link to='/myprofile'> 
                <img className="profile-pic" src='http://bitly.ws/sDmR' alt='HeYY' />
                </Link>
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
