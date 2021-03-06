import React, { useState } from 'react';
import './App.css';
import Sidebar from './Components/Sidebar';
import Chat from './Components/Chat';
import Login from "./Components/Login"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useStateValue } from "./redux/StateProvider";

function App() {
  const [{ user }, dispatch] = useStateValue();
  
  return (
    // BEM naming conventions 
    <div className="app"> 

    {/* if there is no user,
        then show some kind of login screen;
        otherwise shows the app*/}
      {!user ? (
        <Login />
      ) : (
        <div className="app__body">
          <Router>            
            <Sidebar />

            <Switch>
            <Route path="/rooms/:roomId">              
              <Chat />  
            </Route> 

            <Route path="/">
              <Chat />
            </Route>      
                   
           </Switch> 
          </Router> 
      </div>
      )}      
    </div>
  );
}

export default App;
