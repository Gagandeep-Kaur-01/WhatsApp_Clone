import React from 'react';
import './App.css';
import Sidebar from './Components/Sidebar';
import Chat from './Components/Chat';

function App() {
  return (
    // BEM naming conventions 
    <div className="app"> 
      <div className="app__body">
        <Router>
          <Switch>  
            
            <Route path="/app">
              <Sidebar />
              <Chat />  
            </Route> 

            <Route path="/">
              <h1> Home Screen </h1>
            </Route>      
                   
          </Switch> 
        </Router>     
        
      </div>
    </div>
  );
}

export default App;
