import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link, useParams } from 'react-router-dom';

//import './MyProfile.css';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function NewUserProfile(props) {

    let params = useParams();

    const [isFollowing, setIsFollowing] = React.useState(false);
    const [profileData, setProfileData] = React.useState({flag: false, proData: null});
    //let params = useParams();

    const handleFollow = async (event) =>{
        console.log(params.userId);

        let followIdObj = {
            id1: props.userId,
            id2: params.userId
        };

        let url = 'http://localhost:8080/follow';
        let options = {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(followIdObj)
        }
        //console.log("fetch scheduled");
        let res = await fetch(url, options);
        let data = await res.json();
        console.log(data);
        if(data.status === 'Success'){

           console.log(props.userId," now follows ", params.userId);
           setIsFollowing(true);
        }
        else{
            console.log("some error in following the user");
        }

    }

    async function getData(){
        
        //console.log(props.userId);

        console.log(props.userId);
        let userIdObj = {
            username: params.userId
        };

        let url = 'http://localhost:8080/users/profile';
        let options = {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(userIdObj)
        }
        //console.log("fetch scheduled");
        let res = await fetch(url, options);
        let data = await res.json();
        console.log(data);
        if(data.status === 'success'){
            setProfileData({flag: true, proData: data.userdetail});
        }
        else{
            console.log("some error in getting profile data");
        }
        //setPostsData({flag: true, posData: data});
        
    }

    React.useEffect(() => {
        //console.log("useEff Called");
        getData();
    },[]);

  return (
    <div >

        { profileData.flag &&
        <div>
            <Card style={{backgroundColor: "#F2D7D9"}} variant = "shadow-box-example z-depth-5" sx={{ maxWidth: 345, marginLeft: 10 }}>
            <CardContent >
                <Typography variant="h5" component="div">
                Username: {profileData.proData.username}
                </Typography>
                <Typography  sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                Contact: {profileData.proData.phonenumber}
                </Typography>
                <Typography variant="body2">
                <br />
                {`"${profileData.proData.bio}"`}
                </Typography>
            </CardContent>
            <CardActions>
                    {   !isFollowing &&
                        <Button onClick={handleFollow} style={{backgroundColor: "#9CB4CC" , color: "#748DA6"}} size="small">Follow</Button>
                    }

                    {   isFollowing &&
                        <Button onClick={handleFollow} style={{backgroundColor: "#9CB4CC" , color: "#748DA6"}} size="small">Following</Button>
                    }
                    
                    
            </CardActions>
            </Card>
        </div>
        }
    </div>
  );
}
