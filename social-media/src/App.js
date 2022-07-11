
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import { useState } from 'react';


import Login from './components/Login/Login';
import Navbar from './components/Navbar/Navbar';
import Signup from './components/Signup/Signup';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import NewsFeed from './components/NewsFeed/NewsFeed';
import AppNavBar from './components/AppNavBar/AppNavBar';
import Following from './components/Following/Following';
import Follower from './components/Follower/Follower';
import FileUploadPage from './components/FileUploadPage/FileUploadPage';
import MyProfile from './components/MyProfile/MyProfile';
import UserProfile from './components/UserProfile/UserProfile';
import SeePosts from './components/SeePosts/SeePosts';
import NewUserProfile from './components/NewUserProfile/NewUserProfile';


function App() {

  // const [newsFeedModified, setNewsFeedModified] = useState(false);

  const [userId, setUserId] = useState("");
  
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <Router>
      <div>
        {/* Navbar should be unconditional */}
        {/* <Navbar isLoggedIn = {isLoggedIn} setIsLoggedIn = {setIsLoggedIn}/> */}
        <AppNavBar isLoggedIn = {isLoggedIn} setIsLoggedIn = {setIsLoggedIn}  userId = {userId} setUserId ={setUserId}  />
        
        

        {/* Conditional rendering from here */}
        <Routes>
          <Route exact path = '/' element = {<Login isLoggedIn = {isLoggedIn} setIsLoggedIn = {setIsLoggedIn} userId = {userId} setUserId ={setUserId}/>}/>
          
          <Route exact path = '/signup' element = {<Signup/>}/>
          
          <Route exact path = '/newsfeed' element = {<ProtectedRoute isLoggedIn = {isLoggedIn} ><NewsFeed userId = {userId}/></ProtectedRoute>}/>
          
          <Route exact path = '/following' element = {<ProtectedRoute isLoggedIn = {isLoggedIn} ><Following userId = {userId}/></ProtectedRoute>}/>

          <Route exact path = '/follower' element = {<ProtectedRoute isLoggedIn = {isLoggedIn} ><Follower userId = {userId}/></ProtectedRoute>}/>

          <Route exact path = '/myprofile' element = {<ProtectedRoute isLoggedIn = {isLoggedIn} ><MyProfile userId = {userId}/></ProtectedRoute>}/>

          <Route exact path = '/userprofile/:userId' element = {<ProtectedRoute isLoggedIn = {isLoggedIn} ><UserProfile/></ProtectedRoute>}/>

          <Route exact path = '/seeposts/:userId' element = {<ProtectedRoute isLoggedIn = {isLoggedIn} ><SeePosts/></ProtectedRoute>}/>

          <Route exact path = '/newuserprofile/:userId' element = {<ProtectedRoute isLoggedIn = {isLoggedIn} ><NewUserProfile userId = {userId}/></ProtectedRoute>}/>
          {/* <Route exact path = '/removeposts' element = {<RemovePosts/>}/> */}

          <Route exact path = '/fileupload' element = {<FileUploadPage userId = {userId}/>} />

        </Routes>
      </div>
    </Router>
    
  );
}

export default App;
