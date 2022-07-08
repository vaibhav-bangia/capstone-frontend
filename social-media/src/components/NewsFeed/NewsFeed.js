import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import './NewsFeed.css'
import Post from "../Post/Post.tsx";

//import './Posts.css'
//import { useNavigate } from "react-router-dom";


export default function NewsFeed(props) {
    //const navigate = useNavigate();

    const [postsData, setPostsData] = useState({ flag: false, posData: null });

    async function getData() {

        console.log("NewsFeed Page");

        let userName = props.userId;
        let userObj = {
            id: userName
        }

        let url = 'http://localhost:8080/feed';
        let options = {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(userObj)
        }
        
        let res = await fetch(url,options);
        let data = await res.json();
        console.log(data);

        if(data.status === 'success'){
            //props.setIsLoggedIn(true);
            console.log("Newsfeed Displayed");
            setPostsData({flag: true, posData: data.userdetail});

            //code for showing success snackbar to be done here

            //navigate('/newsfeed');
        }
        else{
            console.log("Some Error in Newsfeed");
            //setError(true);
        }


    }


    //the call back function cannot be async, thus we make a new async function inside it
    useEffect(() => {
        //console.log("useEff Called");
        getData();
    }, []);

    return (
        <div className="post-background">
            <h1 className="post-heading">Your Feed</h1>
            

            <div className="flex-container">

                        { postsData.flag &&
                            <div>
                            {postsData.posData.map((post) => {



                                //return <li className="list-margin list-group-item list-group-item-action list-group-item-danger" key={post.postId} idd={post.postId}>{post.postId + " -> " + post.postTitle + " => "} <Link to={`/posts/${post.postId}`}><i>click for details</i></Link></li>
                            
                            return (<Post key={post.posts.postid} postSender={post.userdetails.username} caption={post.posts.caption}  imgSrc="http://bitly.ws/sDBC" />)
                            
                            
                            })}
                            </div>
                        }

                {/* <Post userId = {props.userId} imgSrc="http://bitly.ws/sDBC" />

                <Post userId = {props.userId} imgSrc="http://bitly.ws/sDAt" />

                <Post userId = {props.userId} imgSrc="http://bitly.ws/sEIx"/>

                <Post userId = {props.userId} imgSrc="http://bitly.ws/sEIB"/>

                <Post userId = {props.userId} imgSrc="http://bitly.ws/sEIF"/> */}

                
            </div>



        </div>
    );
}