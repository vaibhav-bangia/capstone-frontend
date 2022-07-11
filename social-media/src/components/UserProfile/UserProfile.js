import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link, useParams } from 'react-router-dom';

import './UserProfile.css';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function UserProfile(props) {

    const [profileData, setProfileData] = React.useState({flag: false, proData: null});
    let params = useParams();

    async function getData(){
        
        //console.log(props.userId);

        console.log(params.userId);
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
            <Card style={{backgroundColor: "#FFDEDE"}} variant = "shadow-box-example z-depth-5" sx={{ maxWidth: 345, marginLeft: 10 }}>
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
                <Link to ={`/seeposts/${params.userId}`}>
                    <Button style={{backgroundColor: "#EB4747" , color: "#ABC9FF"}} size="small">See Posts</Button>
                </Link>
            </CardActions>
            </Card>
        </div>
        }
    </div>
  );
}
