import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import './SeePosts.css'
import Post from "../Post/Post.tsx";

//import './Posts.css'
//import { useNavigate } from "react-router-dom";


export default function SeePosts(props) {
    //const navigate = useNavigate();

    let params = useParams();

    const [postsData, setPostsData] = useState({ flag: false, posData: null });

    async function getData() {

        console.log("MyProfile Posts Page");

        let userName = params.userId;
        let userObj = {
            id: userName
        }

        let url = 'http://localhost:8080/getposts';
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
            console.log("Posts of user displayed");
            setPostsData({flag: true, posData: data.userdetail});

            //code for showing success snackbar to be done here

            //navigate('/newsfeed');
        }
        else{
            console.log("Some error in displaying posts");
            //setError(true);
        }


    }


    //the call back function cannot be async, thus we make a new async function inside it
    useEffect(() => {
        //console.log("useEff Called");
        getData();
    }, []);

    return (
        <div className="post-background-myprofile">
            <h1 className="post-heading">Your Posts</h1>
            

            <div className="flex-container">

                        { postsData.flag &&
                            <div>
                            {postsData.posData.map((post) => {



                                //return <li className="list-margin list-group-item list-group-item-action list-group-item-danger" key={post.postId} idd={post.postId}>{post.postId + " -> " + post.postTitle + " => "} <Link to={`/posts/${post.postId}`}><i>click for details</i></Link></li>
                            
                            return (<Post key={post.postid} postTime={post.date} postSender={post.user} caption={post.caption}  imgSrc={post.postdata} />)
                            
                            
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