import React, { useState } from 'react';
import './App.css';
import Sidebar from './Components/Sidebar';
import Chat from './Components/Chat';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  const [user, setUser] = useState('Gagan');
  return (
    // BEM naming conventions 
    <div className="app"> 

    {/* if there is no user,
        then show some kind of login screen;
        otherwise shows the app*/}
      {!user ? (
        <h1> Login </h1>
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
