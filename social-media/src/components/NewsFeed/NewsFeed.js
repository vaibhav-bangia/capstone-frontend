import { Link } from "react-router-dom";
import { useState,useEffect } from "react";

//import './Posts.css'
//import { useNavigate } from "react-router-dom";

export default function NewsFeed(props){
    //const navigate = useNavigate();

    const [postsData, setPostsData] = useState({flag: false, posData: null});

    async function getData(){
        
        console.log("NewsFeed Page");
        //console.log(props.userId);

        // let userIdObj = {
        //     userId: props.userId
        // };


        // let url = 'http://localhost:3001/posts';
        // let options = {
        //     method: 'POST',
        //     headers: {
        //         'content-type': 'application/json'
        //     },
        //     body: JSON.stringify(userIdObj)
        // }
        // //console.log("fetch scheduled");
        // let res = await fetch(url, options);
        // let data = await res.json();
        // //console.log(data);
        // setPostsData({flag: true, posData: data});
        


        // let url = 'http://localhost:3001/posts';
        
        // let res = await fetch(url);
        // let data = await res.json();
        // console.log(data);
        // setPostsData({flag: true, posData: data})
    }
    

    //the call back function cannot be async, thus we make a new async function inside it
    useEffect(() => {
        //console.log("useEff Called");
        getData();
    },[]);

    return(
        <div>
            <h1>Your Posts</h1>
            {/* conditional rendering */}

            { postsData.flag && 
                <div>
                    <ul className="list-group">
                        {postsData.posData.map((post) => {
                            return <li className="list-margin list-group-item list-group-item-action list-group-item-danger" key={post.postId} idd={post.postId}>{post.postId + " -> " + post.postTitle + " => "} <Link to={`/posts/${post.postId}`}><i>click for details</i></Link></li>
                        })}
                    </ul>
                </div>
            }
        </div>
    );
}