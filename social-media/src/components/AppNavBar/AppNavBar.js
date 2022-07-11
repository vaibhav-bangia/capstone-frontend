import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


import  {useState} from 'react';

import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import Fab from "@mui/material/Fab";

import imageCompression from "browser-image-compression";

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

  //state variables and code for file(image) upload
  const [selectedFile, setSelectedFile] = useState();
	const [isFilePicked, setIsFilePicked] = useState(false);

  const [file, setFile] = useState(null);
  const [file64String, setFile64String] = useState(null);
  const [file64StringWithType, setFile64StringWithType] = useState(null);


  //code for uploading the image and storing it in backend after converting it to base64 String
  function onUploadFileChange(e) {
    setSelectedFile(e.target.files[0]);

    setFile64String(null);
    if (e.target.files < 1 || !e.target.validity.valid) {
      return;
    }

    compressImageFile(e);
  }

  function fileToBase64(file, cb) {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      cb(null, reader.result);
    };
    reader.onerror = function (error) {
      cb(error, null);
    };
  }

  async function compressImageFile(event) {
    const imageFile = event.target.files[0];

    const options = {
      maxWidthOrHeight: 250,
      useWebWorker: true,
    };
    try {
      const compressedFile = await imageCompression(imageFile, options);
      // input file is compressed in compressedFile, now write further logic here

      fileToBase64(compressedFile, (err, result) => {
        if (result) {
          setFile(result);
          //   console.log(file);
          //   console.log(String(result.split(",")[1]));
          setFile64StringWithType(result);
          setFile64String(String(result.split(",")[1]));
        }
      });
    } catch (error) {
      setFile64String(null);
      // console.log(error);
    }
  }


	const changeHandler = (event) => {
		setSelectedFile(event.target.files[0]);
		setIsFilePicked(true);
	};


  //state variable for Add a post's caption
  const [textFieldValue, setTextFieldValue] = useState("");

  const navigate = useNavigate()

  //const [searchValue, setSearchValue] = React.useState("ghost")//State variable for PhoneInput

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

  const handleAddPost = async (event) => {

    console.log("Here is the caption ->",textFieldValue);
    //console.log(file64StringWithType);
    console.log(props.userId);
    console.log(selectedFile.type);

    //let compressedImg64 = atob(file64StringWithType);

    //let compressedImg64 = `data:${selectedFile.type};base64,${file64StringWithType}`
    //myFiles['picture'] = `data:${file.type};base64,${btoa(event.target.result)}`

    //let compressedImg64 = "http://bitly.ws/sDBC";
    console.log(file64StringWithType);
      //let userName = event.target.value;
      let postObj = {
        user: props.userId,
        postdata: file64StringWithType,
        caption: textFieldValue
      }

      let url = 'http://localhost:8080/insertpost';
      let options = {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(postObj)
    }

    let res = await fetch(url,options);
    let data = await res.json();
    console.log(data);

    if(data.status === 'Success'){
        //props.setIsLoggedIn(true);
        console.log("Post added successfully");
        // props.setNewsFeedModified(true);
        //<Navigate to='/newsfeed' replace={true}/>
        //navigate('/newsfeed');
        //code for showing success snackbar to be done here

        //navigate('/newsfeed');
    }
    else{
        console.log("Some Error: Post can't be added");
        //setError(true);
    }
  }

  const handleTextChange = async(event) => {
    setTextFieldValue(event.target.value);
  }

  const handleKeyPress = async (event) => {
    if(event.keyCode === 13){
      console.log(event.target.value);
      let userName = event.target.value;
      navigate(`/newuserprofile/${userName}`);

      
      //setSearchValue(event.target.value);

      

    }
    
  }
  

  return (
    <Box sx={{ flexGrow: 1, marginBottom: 3 }}>

        {/* {file64String !== null ? (
          <img src={file64StringWithType} alt="chosen" />
        ) : (
          <span></span>
        )} */}

      <AppBar position="sticky" style={{backgroundColor: "#18978F"}}>
        <Toolbar>

        {   props.isLoggedIn &&
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
        }

          <Dialog open={addPostOpen} onClose={handleClose} fullWidth maxWidth="sm">
          <DialogTitle>Add Post</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Enter Your Caption Below 
            </DialogContentText>
            
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Comment"
              type="email"
              fullWidth
              variant="standard"
              value={textFieldValue}
              onChange={handleTextChange}
            />

            <input
              accept="image/*"
            //   className={classes.input}
              id="contained-button-file"
              className='input-image'
              multiple
              type="file"
              // onChange={changeHandler}
              onChange={onUploadFileChange}
            />
            <label htmlFor="contained-button-file">
              
            <Tooltip title="Upload image here">
              <Fab component="span"
            //    className={classes.button}
                >

                <AddPhotoAlternateIcon style = {{ color: "dodgerblue" }}/>
              </Fab>
              </Tooltip>
            </label>



          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleAddPost}>Add Post</Button>
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
                onKeyDown = {handleKeyPress}>

                </StyledInputBase>
                
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
