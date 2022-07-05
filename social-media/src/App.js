
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import { useState } from 'react';


import Login from './components/Login/Login';
import Navbar from './components/Navbar/Navbar';
import Signup from './components/Signup/Signup';


function App() {

  const [userId, setUserId] = useState(-1);
  
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <Router>
      <div>
        {/* Navbar should be unconditional */}
        <Navbar isLoggedIn = {isLoggedIn} setIsLoggedIn = {setIsLoggedIn}/>

        {/* Conditional rendering from here */}
        <Routes>
          <Route exact path = '/' element = {<Login isLoggedIn = {isLoggedIn} setIsLoggedIn = {setIsLoggedIn} userId = {userId} setUserId ={setUserId}/>}/>
          
          <Route exact path = '/signup' element = {<Signup/>}/>
          
          
          {/* <Route exact path = '/removeposts' element = {<RemovePosts/>}/> */}
        </Routes>
      </div>
    </Router>
    
  );
}

export default App;
