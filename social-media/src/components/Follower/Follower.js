// import { Link } from "react-router-dom";
// import { useState,useEffect } from "react";

// //import { useNavigate } from "react-router-dom";

// export default function Following(props){
//     //const navigate = useNavigate();

//     const [followingList, setFollowingList] = useState({flag: false, followList: null});

//     async function getData(){
        
//         //console.log(props.userId);

//         // let userIdObj = {
//         //     userId: props.userId
//         // };

//         // let url = 'http://localhost:3001/posts';
//         // let options = {
//         //     method: 'POST',
//         //     headers: {
//         //         'content-type': 'application/json'
//         //     },
//         //     body: JSON.stringify(userIdObj)
//         // }
//         // //console.log("fetch scheduled");
//         // let res = await fetch(url, options);
//         // let data = await res.json();
//         // //console.log(data);
//         // setPostsData({flag: true, posData: data});
        


//         // let url = 'http://localhost:3001/posts';
        
//         // let res = await fetch(url);
//         // let data = await res.json();
//         // console.log(data);
//         // setPostsData({flag: true, posData: data})
//     }
    

//     //the call back function cannot be async, thus we make a new async function inside it
//     useEffect(() => {
//         //console.log("useEff Called");
//         getData();
//     },[]);

//     return(
//         <div>
//             <h1>Followers</h1>
//             {/* conditional rendering */}

//             { followingList.flag && 
//                 <div>
//                     <ul className="list-group">
//                         {followingList.followList.map((user) => {
//                             return <li className="list-margin list-group-item list-group-item-action list-group-item-danger" key={post.postId} idd={post.postId}>{post.postId + " -> " + post.postTitle + " => "} <Link to={`/posts/${post.postId}`}><i>click for details</i></Link></li>
//                         })}
//                     </ul>
//                 </div>
//             }
//         </div>
//     );
// }


import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import FolderIcon from '@mui/icons-material/Folder';
import DeleteIcon from '@mui/icons-material/Delete';

import PersonRemoveIcon from '@mui/icons-material/PersonRemove';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import SaveIcon from '@mui/icons-material/Save';
import { Button } from "@mui/material";


let postsData = [
        {
            postId: 101,
            postTitle: 'OfficiL visit',
            postContent: 'Trip to factory'
        },
        {
            postId: 102,
            postTitle: 'Outing',
            postContent: 'Went to play arena'
        },
        {
            postId: 103,
            postTitle: 'Good day',
            postContent: 'hanging out with friends'
        }
    ]


// function generate(element) {
//   return [0, 1, 2].map((value) =>
//     React.cloneElement(element, {
//       key: value,
//     }),
//   );
// }
// function generate(element) {
//     console.log(element);
//     return postsData.map((post) =>
//       React.cloneElement(element, {
//         key: post.postId,
//       }),
//     );
//   }

const Demo = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));

export default function Follower(props) {
  const [dense, setDense] = React.useState(false);

  const handleUnfollow = async (event) =>{
    console.log(event.target.attributes.idd.value);
  }

  return (
    <Box sx={{ flexGrow: 1, maxWidth: 752 }}>
      
      
      <Grid container spacing={2}>
        
        <Grid item xs={12} md={6}>
          <Typography sx={{ mt: 4, mb: 2, mx: 4 }} variant="h6" component="div">
            Your Followers
          </Typography>
          <Demo>
            <List dense={dense}>
              {postsData.map((post) => {
                return (
                <ListItem sx={{ m: 4}}
                    key = {post.postId}
                  secondaryAction={
                    
                    <Button onClick={handleUnfollow} idd = {post.postId} startIcon={<PersonRemoveIcon />}>Remove</Button>
                    
                  }
                >
                  <ListItemAvatar>
                    <Avatar>
                      <AccountCircleIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText

                    primary = {post.postTitle}
                    // primary="Single-line item"
                  />
                </ListItem>
                )})}
            </List>
          </Demo>
        </Grid>
      </Grid>
    </Box>
  );
}
