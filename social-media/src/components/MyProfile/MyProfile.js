import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

//import './NewsFeed.css'
import Post from "../Post/Post.tsx";

//import './Posts.css'
//import { useNavigate } from "react-router-dom";


export default function MyProfile(props) {
    //const navigate = useNavigate();

    const [postsData, setPostsData] = useState({ flag: false, posData: null });

    async function getData() {

        console.log("NewsFeed Page");

    }


    //the call back function cannot be async, thus we make a new async function inside it
    useEffect(() => {
        //console.log("useEff Called");
        getData();
    }, []);

    return (
        <div className="post-background">
            <h1 className="post-heading">My Posts</h1>
            {/* conditional rendering */}

            {postsData.flag &&
                <div>
                    <ul className="list-group">
                        {postsData.posData.map((post) => {
                            return <li className="list-margin list-group-item list-group-item-action list-group-item-danger" key={post.postId} idd={post.postId}>{post.postId + " -> " + post.postTitle + " => "} <Link to={`/posts/${post.postId}`}><i>click for details</i></Link></li>
                        })}
                    </ul>
                </div>
            }

            <div className="flex-container">
                <Post imgSrc="http://bitly.ws/sDBC" />

                <Post imgSrc="http://bitly.ws/sDAt" />

                <Post imgSrc="http://bitly.ws/sEIx"/>

                <Post imgSrc="http://bitly.ws/sEIB"/>

                <Post imgSrc="http://bitly.ws/sEIF"/>

                
            </div>



        </div>
    );
}                            