import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';


import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';



import CommentIcon from '@mui/icons-material/Comment';
import AddCommentIcon from '@mui/icons-material/AddComment';
import { autocompleteClasses, CardActionArea } from '@mui/material';

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));



// const styles ={
//     height: 140,     
//     // width: '33%',
//     // marginLeft: '33%'
// };


export default function Post(props) {
 // const [expanded, setExpanded] = React.useState(false);

  const [like, setLike] = React.useState(false);

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleToggle = () => {
    setLike(!like);
  };
 

  // const handleExpandClick = () => {
  //   setExpanded(!expanded);
  // };



  return (
    <Card className='shadow-box-example z-depth-5' sx={{ maxWidth: 345, marginLeft: "auto", marginRight: "auto", marginBlock: 5 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
      <CardActionArea>
      <CardMedia
        component="img"
        
        image={props.imgSrc}
        alt="Paella dish"
      /> </CardActionArea>
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites" onClick={handleToggle}>
          { !like &&
            <FavoriteBorderIcon   />
          }

          { like &&
            <FavoriteIcon style ={{ color: "#fd1d1d"}} />
          }
          
        </IconButton>
        <IconButton aria-label="show comments">
          <CommentIcon style ={{ color: "dodgerblue"}} />
        </IconButton>

        {/* Code for adding the comment using the MUI Dialog */}
        <IconButton sx={{mx: "12rem"}} onClick={handleClickOpen}>

          <AddCommentIcon style ={{ color: "black"}} />
        </IconButton>
          <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
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
            <Button onClick={handleClose}>Add Comment</Button>
          </DialogActions>
        </Dialog>
      </CardActions>
      
    </Card>
  );
}
